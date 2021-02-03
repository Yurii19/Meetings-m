import {createVirtualElement} from "../functions";

const userSelect = (items, multiple = false) => {
    const containerSelect = document.createElement('select');
    items.forEach(el => {
        const item = createVirtualElement({tagName: 'option', text: el});
        containerSelect.appendChild(item);
        item.value = el;
    })
    containerSelect.classList.add('select');
    if (multiple) {
        containerSelect.setAttribute('multiple','multiple');
        containerSelect.size = 1;
        containerSelect.addEventListener('focus', () => containerSelect.size = 5);
        containerSelect.addEventListener('blur', () => containerSelect.size = 1);
    }

    const eventHover = (ev) => {
        ev.target.size = 5;
    }
    return containerSelect;
}

export default userSelect;