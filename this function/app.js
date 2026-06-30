const student = {
    name: "ritesh girase",
    marks: 95,
    prop: this,  // global scope

    //normal function
    getName: function () {
        console.log(this);
        return this.name;
    },

    //arrow function
    getMarks: () => {
        console.log(this);  //parent's scope -> window
        return this.marks;
    },

    getInfo1 : function() {
        setTimeout( () => {
            console.log(this); //studnet
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        }, 2000)
    },
};

// const a = 5; // global scope

// square of no
const square = n => n * n;

console.log(square(11));

// Hello world 5 times

let id = setInterval(()=> {
    console.log("Divyanka Pagare");
}, 2000);

setTimeout(() => {
    console.log(id);
    console.log("clear interval run")
}, 10000)
