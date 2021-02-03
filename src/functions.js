const createVirtualElement = (params) => {
    const container = document.createElement(params.tagName);
    let content = document.createTextNode(params.text);
    container.append(content);
    return container;
}

export {createVirtualElement} ;