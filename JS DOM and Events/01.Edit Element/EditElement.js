function editElement(el, toReplace, replaceWith) {
    let string = el.textContent;
    let regex = new RegExp(toReplace, 'g');
    string = string.replace(regex, replaceWith);
    el.textContent = string;
}