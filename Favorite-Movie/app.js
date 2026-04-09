const favMovie = "avatar";

let guess = prompt("guess the favorite movie");

while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong guess. please try again");
}

if (guess == favMovie) {
    console.log("you guessed it right, Congrats!");
} else {
    console.log("you quit the game");
}