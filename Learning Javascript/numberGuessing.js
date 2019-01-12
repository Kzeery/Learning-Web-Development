var num = 6;
var guess = Number(prompt("What is your guess?"));

if(guess === num) {
    alert("You guessed it!!!");
}
else if(guess > num) {
    alert("Too high, guess again!");
}
else if(guess < num) {
    alert("Too low, guess again!")
}
else {
    alert("Error. Please enter a number.")
}