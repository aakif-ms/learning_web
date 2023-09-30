let maximum = parseInt(prompt("Enter Maximum Number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!!!!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter Your First Guess!!!"));
let counter = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    counter++;
    if (guess > targetNum) {
        guess = prompt("Too High!! Enter a new guess");
    } else {
        guess = prompt("Too Low!! Enter a new guess");
    }
}
if (guess === 'q') {
    console.log("You Quit");
    console.log(`The number was ${targetNum}`);
}
else {
    console.log(`You got it!! The number was ${targetNum}`);
    console.log(`It took you ${counter} guesses`);
}

