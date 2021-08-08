function fn(param){
    console.log("Param is ",param);

}

//direct value pass hoti hai
fn(10);
fn("dsjfd");

//reference type value mai address pass hota hai function mai
fn([1,2,3,4,5,6]);
fn({name : "Jasbir"});

//there are 4 ways to of a function
function fn(){ //function statement bolte hai isko
    console.log("I am a statement");
}
fn(); //yeh statement hai

//in js functions can be treated as a variable
// js mai bas address pass hota hai function mai, so dono array bhi ek hi array ko refer kr rhe hai, means a mese kuch pop kiya to b mai bi relfect krega
let a= [1,2,3,4,5];
let b=a;
console.log("b", b);
a.pop();
console.log("b",b);

//jaise aap variables mai value/address assign kr skte ho waise functions mai bhi hai
// function expression: means aap kisi function ko variable ke andar store kr skte ho
let exp= function (){ //function ka address exp mai jayega
    console.log("I am function expression");
}
exp();  //variable ko call kiya

//IIFE -> Immediately invoke function expression
(function fn(){
    console.log("I am an IFEE, i will be called immediately");
})(); //iss function pe jaisehi ayega yeh chal jayega isko alag se call karneki jarurat nhi hai


//arrow function -> react mai use hota hai
let arrowFN = () => {
    console.log("I am function");
}
arrowFN();
