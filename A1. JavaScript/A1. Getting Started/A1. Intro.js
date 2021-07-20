//no main -> isme main nhi hota
// left to right and top to bottom code run hota hai
console.log("Hello World"); // print karne keliye
console.log("Hello World"); // dono alag alag line mai print honge it works like System.out.println(), statement print hone ke bad enter press hojata hai

//variable declare, aur datatype dene ki jarurat nhi hoti
let a;
// variables ki default value hoti hai 'undefined'

// isme only numbers hote hai ->  integers/float nhi hote hai
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

// loops, classes, conditional are similarto java
for( let i=1 ; i<= 10; i++){
    console.log("Number is "+i);
}

//single line print
process.stdout.write("") // isme concatenate vagere kr skte hai

process.stdout.write("Hello");
process.stdout.write("Hello"); //output: HelloHello
//this works like System.out.print(), isme enter nhi press hota

-----------------------------------------typeof---------------------------------
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof null);
console.log(typeof 10);

Output:
string
boolean
object
number
