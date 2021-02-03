import {createVirtualElement} from "../functions";

const errorMessage =  (text = "Error") => {
    const errorContainer = document.createElement("div");
    errorContainer.id = 'error-container'
    const errorMessage = createVirtualElement({tagName: 'span', text});
    errorMessage.classList.add('error-message');
    const buttonClose = createVirtualElement({tagName:'div',text: ''});
    buttonClose.classList.add('button-close');
    buttonClose.innerHTML = '&#10062;';
    errorContainer.appendChild(errorMessage);
    errorContainer.appendChild(buttonClose);
    errorContainer.classList.add('error-block');
    buttonClose.addEventListener('click', () => {
        errorContainer.classList.remove('err-visible');
    })
    return errorContainer;
};

export default errorMessage;