// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman","flash"]
// ]

// for (let i = 0; i < heroes.length; i++) {
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(i , heroes[i], heroes[i].length)
//         for (let j = 0; j < heroes[i].length; j++) {
//             console.log(`j = ${j}, ${heroes[i][j]}`);
//         }
//     }
// }

let students = [["ritesh", 95], ["divyanka", 94.4], ["karan", 100]];
for (let i = 0; i < students.length; i++) {
    console.log(`info of sudent #${i+1}`);
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}