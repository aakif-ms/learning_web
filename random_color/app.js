const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function () {
    const color = random();
    document.body.style.backgroundColor = color;
    h1.innerText = color;
})

function random() {
    const r = Math.floor(Math.random()*256)+1;
    const g = Math.floor(Math.random()*256)+1;
    const b = Math.floor(Math.random()*256)+1;
    return `rgb(${r}, ${g}, ${b})`;
}