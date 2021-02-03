import tableHead from "./components/table-head";
import tableTitle from "./components/table-title";
import tableBody from "./components/table-body";

const calendar = () => {
    const calendar = document.createElement('div');
    calendar.id = 'calendar';
    calendar.appendChild(tableTitle());
    calendar.appendChild(tableHead());
    calendar.appendChild(tableBody());

    return calendar;
}
export default calendar;