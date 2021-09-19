
// function are variable 
//aap ek function ko return kr skte ho ek function se
function outer() {
    let outerVar = 10;
    console.log("Outer function called ");
    return function inner(secondNum) { //innner function ko return kr rhe hai
        console.log("Inner function called");
        return outerVar + secondNum;
    }
}

let innerFnRef = outer(); //humne outer function call kiya aur humare pas innder function ka reference aagya
console.log("Between");
let rVal = innerFnRef(20);
console.log("rVal", rVal); //iska answer 30 print hoga but yeh possible nhi hona chahiye
// open pdf and see dry run to see why?
