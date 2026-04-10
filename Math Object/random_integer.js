// From 1 to 10
// step 1
let num = Math.random(); // gives random number between 0 to 1
console.log(num); // 0.123456789
// step 2
num = num * 10; // gives random number between 0 to 10
console.log(num); // 1.23456789

// step 3
num = Math.floor(num); // gives random integer between 0 to 9
console.log(num); // 1

// step 4
num = num + 1; // gives random integer between 1 to 10
console.log(num); // 2

num = Math.floor(Math.random() * 10) + 1; // gives random integer between 1 to 10
console.log(num); // 3

num = Math.floor(Math.random() * 100) + 1; // gives random integer between 1 to 100
console.log(num); // 45

num = Math.floor(Math.random() * 5) + 1; // gives random integer between 1 to 5
console.log(num); // 4

num = Math.floor(Math.random() * 5) + 20; // gives random integer between 20 to 24
console.log(num); // 22

num = Math.floor(Math.random() * 5) + 21; // gives random integer between 21 to 25
console.log(num); // 23
