export default (text = "Init Yurii`s app.") => {
    const element = document.createElement("h1");
    element.innerHTML = text;
    return element;
};