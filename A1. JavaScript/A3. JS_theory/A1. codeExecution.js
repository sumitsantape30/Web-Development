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
    // memory allocate
       //variables -> undefined
       //function -> memory allocate  (aur functions ko memory allocate hojati hai)

//memory allocate hone ke bad code execute hota hai
//2. Code Execution
       //left to right and top to bottom execute hoga code


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
