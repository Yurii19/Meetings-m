import {createVirtualElement} from "../functions";
import {inputsNames, meetings, persons} from "../store";
import app from "../app";

const formsControl = (items) => {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const buttonCancel = createVirtualElement({tagName: 'button', text: 'Cancel'});
    const buttonCreate = createVirtualElement({tagName: 'input', text: 'Create'});
    buttonCreate.type = 'submit';
    buttonCreate.value = 'Create';
    buttonCreate.addEventListener('click', addNewMeeting);
    buttonCancel.addEventListener('click', closeForm);
    buttonContainer.appendChild(buttonCancel);
    buttonContainer.appendChild(buttonCreate);
    return buttonContainer;
}
const closeForm = () => {
    app();
}

const addNewMeeting = (ev) => {
    ev.preventDefault();
    let newMeeting = {id: null, name: '', day: '', hour: null, participants: [],};
    let newMeetingName = document.getElementsByName('meet-name')[0].value;
    newMeeting.name = newMeetingName ? newMeetingName : 'Meeting';
    if (!newMeetingName) {
        alert('Input a valid name');
        return;
    }
    newMeeting.day = document.getElementsByName('meet-day')[0].value;
    newMeeting.hour = parseInt(document.getElementsByName('meet-hour')[0].value.slice(0, 2));

    const participants = document.getElementsByName('meet-participants');
    let options = participants[0].options;
    for (const key in options) {
        if (options[key].selected && options[key].value == 'All') {
            newMeeting.participants = (persons.slice(1));
            break;
        }
        if (options[key].selected) {
            newMeeting.participants.push(options[key].value);
        }

    }
    let errorAddNewMeeting = document.getElementsByClassName('error-block');
    errorAddNewMeeting[0].classList.remove('err-visible');
    for (const meeting in meetings) {
        let hour = meetings[meeting]['hour']
        let day = meetings[meeting]['day']
        if (hour === newMeeting['hour'] && day === newMeeting['day']) {
            errorAddNewMeeting[0].classList.add('err-visible');
            return;
        }
    }
    let localMeetings = Array.from(meetings);
    for (const meeting in localMeetings) {
        if (parseInt(meeting) !== parseInt(localMeetings[meeting].id)) {
            newMeeting.id = parseInt(meeting);
            return;
        }
    }
    if (!newMeeting.id) {
        newMeeting.id = localMeetings.length;
    }
    meetings.push(newMeeting);
    document.getElementById('meetingForm').classList.add('node-hidden');
    document.getElementById('calendar').classList.remove('node-hidden');
    app();
};

export default formsControl;