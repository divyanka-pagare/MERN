const post = {
    username : "@divyankapagare",
    content : "This is my first post on Twitter!",
    likes : 150,
    reposts : 5,
    tags : ["@cogoport"]
}

// object["content"]
post["content"];  // when we need to use variable that time we use [] 
// post["likes"];
// post.content; // dot operator

post.tags[0]; // accessing the first tag in the tags array

//-------------------------------------------------------

// Get Value

const obj = {
    1 : "a",
    2 : "b",
    null : "c",
    undefined : "d",
    true : "e"

}
console.log(obj[1]); // a
console.log(obj[null]); // c
console.log(obj[undefined]); // d
// console.log(obj.1); // SyntaxError: Unexpected number
console.log(obj.null); // c
console.log(obj.undefined); // d    

// here null, 1, undefined are not number or string but they are converted to string and stored as key in the object.
//-------------------------------------------------------   

