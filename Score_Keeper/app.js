let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let p1btn = document.querySelector('#p1btn');
let p2btn = document.querySelector('#p2btn');
let reset = document.querySelector('#reset');
let select = document.querySelector('select');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

p1btn.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2btn.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

select.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetf();
})

reset.addEventListener('click', resetf)

function resetf() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false;
}