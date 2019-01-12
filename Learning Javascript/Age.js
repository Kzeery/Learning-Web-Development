var age = Number(prompt("What is your age?"));
if(age < 0) {
    alert("Error. Age cannot be negative!");
}
if(age % 2 === 1) {
    alert("your age is odd!");
}
if(age === 21) {
    alert("happy 21st birthday!!");
}
if(Number.isInteger(age ** 0.5)) {
    alert("perfect square!")
}