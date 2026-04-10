// const classInfo = {
//     ritesh : {
//         grade: "A+",
//         city: "Mumbai",

//     },
//     divyanka : {
//         grade: "A",
//         city: "Nashik",
//     },
//     pradyum : {
//         grade: "O",
//         city: "Pune"
//     }
// }

// classInfo.ritesh // { grade: 'A+', city: 'Mumbai' }
// classInfo.divyanka // { grade: 'A', city: 'Nashik' }

// classInfo.divyanka.grade // "A"
// classInfo.divyanka.city // "Nashik"

// classInfo.divyanka.city = "Andheri"
// classInfo.divyanka.city // "Andheri"


const classInfo = [
    {
        name: "ritesh",
        grade: "A+",
        city: "Mumbai", 

    },
    {
        name: "divyanka",
        grade: "A",
        city: "Nashik"
    },
    {
        name: "pradyum",
        grade: "O",
        city: "Pune"
    }
]
    
classInfo[0] // { name: 'ritesh', grade: 'A+', city: 'Mumbai' }
classInfo[1] // { name: 'divyanka', grade: 'A', city: 'Nashik' }        
classInfo[2] // { name: 'pradyum', grade: 'O', city: 'Pune' }

classInfo[1].name // "divyanka"
classInfo[1].grade // "A"
classInfo[1].city // "Nashik"
classInfo[1].city = "Andheri"
classInfo[1].city // "Andheri"
classInfo[1] // { name: 'divyanka', grade: 'A', city: 'Andheri' }

classInfo[1].gender = "female"
classInfo[1] // { name: 'divyanka', grade: 'A', city: 'Andheri', gender: 'female' }
