import input from "./components/input";
import userSelect from "./components/users-select";
import {DAYS, HOURS, persons} from "./store";
import formsControl from "./components/forms-control";


const form = () => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.classList.add('node-hidden');
    form.id = 'meetingForm';

    const eventNameInput = document.createElement('input');

    const eventName = input('Name of the event', eventNameInput, 'meet-name');
    const eventParticipants = input('Participants', userSelect(persons, true), 'meet-participants');
    const eventDay = input('Day', userSelect(DAYS), 'meet-day');
    eventParticipants.classList.add('multiple-select');
    const eventStartHour = input('Time', userSelect(HOURS.map(el => `${el}:00`)), 'meet-hour');
    const inputs = [eventName, eventParticipants, eventDay, eventStartHour];
    inputs.forEach(el => form.appendChild(el));
    form.appendChild(formsControl());
    return form;
};


export default form;