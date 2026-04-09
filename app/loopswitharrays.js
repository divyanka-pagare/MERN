let fruits = ["apple", "banana", "orange", "grape"];
fruits.push("pineapple"); // adds "pineapple" to the end of the array
for (let i = 0; i < fruits.length; i++) { 
    // for even number start with i = 0 and i += 2 and 
    // for odd number start with i = 1 and i += 2

    console.log(i, fruits[i]);
}

//print reverse order of fruits
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}