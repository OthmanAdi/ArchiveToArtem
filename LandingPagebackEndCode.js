//Choose a Random Color
const button = document.querySelector('button');

const body = document.querySelector('body');

const colors = ['red', 'purple', 'blue', 'yellow', 'green', 'pink'];

let input = document.querySelector('input');
let textarea = document.querySelector('textarea');


body.style.backgroundColor = 'transparent'
button.addEventListener('click', changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}

//New Code for Reading a text file and displaying the content
input.addEventListener('change', () => {
    let files = input.files;

    if (files.length === 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});
