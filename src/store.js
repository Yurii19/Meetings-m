export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const HOURS = [10, 11, 12, 13, 14, 15, 16, 17, 18];

export const persons = ['All', 'Alex', 'Vlad', 'Natali', 'Michael', 'Kate', 'Viktoria', 'Eugene'];

export const messages = {
    errorMessage: 'Failed to create an event. Time slot is already booked.',
};

export const inputsNames = ['meet-name', 'meet-participants', 'meet-day', 'meet-hour'];

export const setFilter = (person) => {
    filter = person;
}
export let filter = 'All';

export const getMeetings = () => {
    if (filter === 'All') {
        return meetings;
    }
    let personMeetings = meetings.filter(el => {
        return el.participants.includes(filter);
    })
    return personMeetings;
}

export const setMeetings = (param) => {
    meetings = param;
}

export let meetings = [
    {
        id: 0,
        name: 'Introduction',
        day: 'Monday',
        hour: 10,
        participants: ['Alex', 'Vlad', 'Michael'],
    },
    {
        id: 1,
        name: 'First lesson',
        day: 'Tuesday',
        hour: 11,
        participants: ['Vlad', 'Michael'],
    },
    {
        id: 2,
        name: 'Second lesson',
        day: 'Friday',
        hour: 18,
        participants: ['Vlad', 'Michael', 'Natali'],
    },


];