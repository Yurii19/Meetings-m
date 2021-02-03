import {createVirtualElement} from "../functions";
import {DAYS} from "../store";

const tableHead = () => {
    let container = createVirtualElement({tagName: 'div', text: ''});
    container.classList.add('table-header');
    const row = createVirtualElement({tagName: 'tr', text: ''});
    row.appendChild(createVirtualElement({tagName: 'th', text: 'Name'}))
    for (const day in DAYS) {
        let temp = createVirtualElement({tagName: 'th', text: DAYS[day]});
        row.appendChild(temp);
    }
    container.appendChild(row);
    return container;
}

export default tableHead;