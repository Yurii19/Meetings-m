import userSelect from "./users-select";
import {filter, persons, setFilter} from "../store";
import app from "../app";
import {createVirtualElement} from "../functions";

const tableTitle = () => {
    const container = document.createElement('div');
    const tableTitle = createVirtualElement({tagName: 'h2', text: 'Calendar'});
    const buttonAdd = createVirtualElement({tagName: 'button', text: 'New event +'});
    buttonAdd.addEventListener('click', () => {
        document.getElementById('meetingForm').classList.remove('node-hidden');
        document.getElementById('calendar').classList.add('node-hidden');
    });
    const thePerson = userSelect(persons);
    thePerson.addEventListener('change', (ev) => {
        setFilter(ev.target.value);
        app();
    })
    thePerson.value = filter;

    container.append(tableTitle);
    container.appendChild(thePerson);
    container.appendChild(buttonAdd);
    buttonAdd.classList.add('btnadd')
    container.classList.add('head');
    return container;
}

export default tableTitle;