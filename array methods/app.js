// forEach function

let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function (el) {
    console.log(el);
})


let students = [
    {
        name:"ritesh",
        marks:95
    }, {
        name:"divyanka",
        marks:94.4
    }, {
        name:"gajesh",
        marks:92
    },
];

// arr.forEach((student) => {
//     console.log(student.marks);
// });


//Map function

// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//     return el * el;
// });

let gpa = student.map((el) => {
    return el.marks / 10;
});


//Filter

let nums = [1,2,3,5,6,8,10,11];

let ans = nums.filter((el) => {
    return el % 2 == 0; // even --> true , odd --> false  | return nums 
    return el < 5;  
})


// Every

//similar to logical AND operator 

[2,4,6].every((el) => el * 2 == 0);  //true

[2,4,6,8].every((el) => el * 2 == 0);  //true

[2,4,6,8,1].every((el) => el % 2 == 0);  //false

[2,4,6,8,1].every((el) => el % 2 != 0);  //false

[3,5,1].every((el) => el % 2 != 0);  //true

// Some -> similar to Logical OR

// Reduce

