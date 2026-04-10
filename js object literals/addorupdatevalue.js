/*
add or update value
- change the city to "Mumbai"
- add a new property, gender: "Female"
- change the marks to "A"

*/ 

const student = {
    name : "Divyanka",
    age : 21,
    marks : 94.4,
    city : "nashik"
};

console.log(student.city); // nashik

// add or update value
student.city = "Mumbai";
student.gender = "Female";
student.marks = "A";

console.log(student.gender); // Female
console.log(student.city); // Mumbai
console.log(student.marks); // A   

student.marks = [95, 96, 97];
console.log(student.marks); // [95, 96, 97] 

delete Object.keyname; // delete the key from the object
delete student.marks; // delete the marks key from the student object
console.log(student.marks); // undefined      

