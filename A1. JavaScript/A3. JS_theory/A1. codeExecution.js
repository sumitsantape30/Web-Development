 // js mai main() vagere nhi hota JS humesha environment ke andar chalti hai
 //js code -> enviornment 
 // environment muje code + global + this deta hai
 // js ko 2 jagah use karoge -> browser, nodejs
 // node ek env hai jisme js chalta hai
//js engine -> this runs JS code
// key word => that executes JS code
 // node apko ek variable(object) deta hai jiska nam hai global

 //code+ Enviroment(global) + js(this)
  //aur browser ke case mai usko milta hai -> window object
// global is the enviorment given by you environment
console.log(global); // this prints empty objects
console.log(this); // this print -> empty object

let a; //so jab hum let a; likhnte hai to hume 2 chize aur milti hai those are global,this.

//===========\\

//every code inside js run EC
//Execution Context ke andar 3 chize hoti hai-> Code+ Enviroment(global) + js(this) 
// jo code hota hai woh execution context ke andar hi run krta hai
//EC ke andar run karne keliye there are 2 phases
// Execution context ke andar run karne keliye pehla part hota hai Creation Phase
//Creation phase ke andar apke liye means jo variables,functions hai uske liye memory allocate hoti hai aur jo variable hai unki value undefined set ki jati hai
//1. creation phase
    //a. memory allocate :> Hoisting (heavy word)
       //variables -> undefined
       //function -> memory allocate  (aur functions ko memory allocate hojati hai)
    //b. this,global mil jayega depending kaha kam kr rhe ho
    //c. 

//memory allocate hone ke bad code execute hota hai
//2. Code Execution
       //left to right and top to bottom execute hoga code

//jab stack ban jata hai, jo default value set hoti hai usko Global Execution Context bolte hai
//EC is only created when a function is called
// aur function call hota hai execution stack se *open ScreenShot*
//memory allocation kaise hoti hai?
console.log(a);
console.log(b);
var a; 
var b;
a= 10;
b= [1,2,3,4,5];
console.log(a);
console.log(b);

fn();
function fn(){
    console.log("Thank you for calling me");
}
fn();

Output:
undefined
undefined
10
[1,2,3,4,5];
Thank you for calling me
Thank you for calling me
*Open Screenshot for memory allocation*

//NEW EC----------------------------------------------------------------------------
//jab function call hoga to new EC create hog
// when function execution is finish: variables of that function will be destroyed
console.log("line number",a);
var a; 
a= 10;
console.log(a);

fn(); //har function call hone ke bad har bar new EC create hota hai
function fn(){
    console.log("line number 55",a);
    var a= 10;
    console.log("Thank you for calling me val of a is",a);
}
fn();

Output:
line number undefined
10
line number 55 undefined
Thank you for calling me val of a is 10
line number 55 undefined
Thank you for calling me val of a is 10

//EC---------------------------------------------------------------------------

//other enviroment -> outer variable,function
console.log("line number",a);
var a; 
a= 10;
console.log(a);

fn();
function fn(){
    console.log("line number 55",a);
    a++;
    console.log("Thank you for calling me val of a is",a);
}
fn();
console.log("76", a);

Output:
line number undefined
10
line number 55 10
Thank you for calling me val of a is 11
line number 55 11
Thank you for calling me val of a is 12
76 12

//lexical scope (heady word)----------------------------------------------------------
// function where outer env is defined by where is the function definition exist
var varName=1;
function a(){
    console.log(varName);
}

function b(){
    var varName= 2;
    a();
}

b();
Output: 1

//===================================================================================

var a=10;
function fn(){
    var a= 20;
    a++;
    console.log("line number 101", a);
    if( true){
        var a= 30;
        a++;
        console.log("line number 101", a);
    }
    console.log("line number 107",a);
}
console.log("109",a);
fn();
console.log("111",a)

Output:
109 10
line number 101 21
line number 101 31
line number 107 31
111 10
