const otherWorld = 'Inny świat';

export function greetings() {
    const $root = document.querySelector('#root');
    $root.innerHTML = `<h1>${otherWorld}</h1>`;
    $root.innerHTML = '<h1>'+otherWorld+'</h1>';
}
