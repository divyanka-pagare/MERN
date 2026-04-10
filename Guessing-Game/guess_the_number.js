const max = propmt("Enter the maximum number: ");
const randomNum = Math.floor(Math.random() * max) + 1;
guess = prompt("Guess the number: ");
while (true) {
    if (guess < randomNum) {
        alert("Too low! Try again.");
    }
    else if (guess > randomNum) {
        alert("Too high! Try again.");
    }
    else if (guess == randomNum) {
        alert("Congratulations! You are right!");
        break;
    } else if (guess == "quit") {
        alert("Thanks for playing!");
        break;
    } else {
        alert("Invalid input! Please enter a number or 'quit' to exit.");   
        guess = prompt("Guess the number: ");
    }
}

