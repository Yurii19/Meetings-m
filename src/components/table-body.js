import {createVirtualElement} from "../functions";
import {DAYS, getMeetings, HOURS, meetings, setMeetings} from "../store";
import app from "../app";

const tableBody = () => {
    const localMeetings = getMeetings();
    const container = document.createElement('div');
    for (const hour in HOURS) {
        const tableRow = createVirtualElement({tagName: 'tr', text: ''});
        tableRow.appendChild(createVirtualElement({tagName: 'td', text: `${HOURS[hour]}:00`}));
        for (const day in DAYS) {
            const tableCell = createVirtualElement({tagName: 'td', text: ''});
            tableCell.setAttribute('day_hour', DAYS[day] + '_' + HOURS[hour]);
            for (const meeting in localMeetings) {
                if (localMeetings[meeting].day === DAYS[day] && localMeetings[meeting].hour === HOURS[hour]) {
                    tableCell.innerText = localMeetings[meeting].name;
                    const buttonClose = createVirtualElement({tagName: 'button', text: ''});
                    tableCell.id = `meeting_${localMeetings[meeting].id}`;
                    buttonClose.innerHTML = '&#10062;';
                    tableCell.appendChild(buttonClose);
                    tableCell.draggable = true;
                    tableCell.classList.add('match-meet');
                }
            }
            tableCell.ondragstart = (ev) => {
                ev.dataTransfer.setData('id', ev.target.id);
            }
            tableCell.ondragover = (ev) => {
                ev.preventDefault();
                ev.target.style.boxShadow = 'inset 0px 0px 35px -2px #badc58';
            }
            tableCell.ondragleave = (ev) => {
                ev.preventDefault();
                ev.target.style.boxShadow = '';
            }
            tableCell.ondrop = (ev) => {
                const data = ev.target.getAttribute('day_hour').split('_');
                const newDayMeting = data[0];
                const newHourMeting = parseInt(data[1]);
                const targetMeeting = meetings.find(el => el.day === newDayMeting && el.hour === newHourMeting);
                if (targetMeeting) {
                    console.log('targetMeeting')
                }
                ;
                if (ev.target.id || targetMeeting) {
                    ev.target.style.boxShadow = '';
                    return;
                }
                const meetingID = ev.dataTransfer.getData('id').split('_')[1];
                const target = meetings.find(el => el.id === parseInt(meetingID));
                target.day = newDayMeting;
                target.hour = newHourMeting;
                app();
            }
            tableRow.appendChild(tableCell);
        }
        container.appendChild(tableRow);
    }
    const deleteHandler = (ev) => {
        if(ev.target.tagName != 'BUTTON')return;
        const parent = ev.target.parentElement;
        const parentID = parent.id.split('_')[1];
        const targetEvent = meetings.find(el => el.id == parentID);
        let confirmDelete = confirm(`Are you really want to delete  "${targetEvent.name}" event ? `);
        if (!confirmDelete) return;
        if (parent.id && parent.tagName === 'TD') {
            const newMeetings = meetings.filter(el => el.id != parentID);
            setMeetings(newMeetings);
            app();
        }
    }

    const showTip = () => {
        if (!event.target.id) return;
        const meetID = event.target.id.split('_')[1];
        const theMeeting = meetings.find(el => el.id == meetID);
        const tipBlock = document.createElement('ul');
        for (const key in theMeeting.participants) {
            let person = theMeeting.participants[key];
            tipBlock.appendChild(createVirtualElement({tagName: 'li', text: person}));
        }
        tipBlock.classList.add('tip-block');
        event.target.appendChild(tipBlock);
    }
    const hideTip = () => {
        let tips = document.getElementsByClassName('tip-block');
        if (tips) {
            Array.from(tips).forEach(el => el.remove());
        }
    }

    container.addEventListener("click", deleteHandler);
    container.onclick = showTip;
    container.onmousemove = hideTip;
    container.classList.add('table-body');
    return container;
}

export default tableBody;