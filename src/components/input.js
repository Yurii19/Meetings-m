import {createVirtualElement} from "../functions";

const input = (title = 'Title', node, name) => {
    const container = createVirtualElement({tagName: 'label', text: title});
    const input = document.createElement("input");
    node.name = name;
    container.appendChild(node);
    return container;
};

export default input;