//no main -> isme main nhi hota
// left to right and top to bottom code run hota hai
console.log("Hello World"); // print karne keliye
console.log("Hello World"); // dono alag alag line mai print honge it works like System.out.println(), statement print hone ke bad enter press hojata hai

//variable declare, aur datatype dene ki jarurat nhi hoti
let a;
// variables ki default value hoti hai 'undefined'

// JS mai only numbers hote hai ->  integers/float nhi hote hai
a= 10;
//console.log(5/2); //2.5 dega output

//only String hoti hai -> characters nhi hote
a= "I am String";
a= 'I am also string';

// boolean -> true/false
a= true;
// null
a= null;
console.log(a);

//summary: variable -> declare default -> undefined
// primitive types js:  undefined, numbers, string, boolean, null

// loops, classes, conditional are similar too java
for( let i=1 ; i<= 10; i++){
    console.log("Number is "+i);
}

//single line print
process.stdout.write("") // isme concatenate vagere kr skte hai

process.stdout.write("Hello");
process.stdout.write("Hello"); //output: HelloHello
//this works like System.out.print(), isme enter nhi press hota

// comparison, aithmatic => ( >,=,<), * / , rha to string(numbers bhi input lete waqt string form mai hi ata hai)  will be converted into number as input string mai hi hota hai
let input= "10";
let b=10;
cnsole.log( input > 5);
output: true

let input= "10";
let b= 20;
let ans= input + b; // b concatenate hoga input mai
console.log(ans); //yeh concatenate wala case hai
let ans= Number(input) + b; //ab input mai b add hoga coz hum trypecaste kiya hai
console.log(ans);
-----------------------------------------typeof---------------------------------
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof null); // typeof null 'object' type dega, its a bug in JS
console.log(typeof 10);

Output:
string
boolean
object
number
