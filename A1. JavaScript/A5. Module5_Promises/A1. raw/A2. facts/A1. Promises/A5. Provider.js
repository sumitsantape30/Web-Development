//This prooves 2nd point: future value inside that promise is determined by the function that returns the promise

let fs = require('fs');
// request 
let axios = require("axios"); //axios request marne ke kam ata hai

// file with name f1 will be read
let pPromise = fs.promises.readFile("f1.txt");

// Hello will be written into file f2 
fs.promises.writeFile("f2.txt", "Hello")

let respPromise = axios.get("https://jsonplaceholder.typicode.com/users"); //app URL pass karke data mangwa skte ho
pPromise.then(function (data) {
    console.log("Result of fileReadPromise: " + data);
})
respPromise.then(function (response) {
    console.log("axios", response.data);
})

//meaning is fs.promises.readFile ek promise deta hai aisehi fs.promises.writeFile bhi promise deta hai so jo function promise deta hai wahi decide krta hai kiiss promise ki resolve hone pr end output kya hone wala hai
