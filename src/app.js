import './styles/style.less';

import calendar from "./calendar";
import form from "./form";
import errorMessage from "./components/error-message";
import {messages} from "./store.js"

const app = () => {
    document.body.innerHTML = '';
    const root = document.createElement('div');
    root.classList.add('root');
    root.appendChild(form());
    root.appendChild(calendar());
    document.body.appendChild(errorMessage(messages.errorMessage));
    document.body.appendChild(root);
}

app();
export default app;