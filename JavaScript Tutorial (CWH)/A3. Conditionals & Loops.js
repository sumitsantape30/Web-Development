
function average( a, b){

    return a+b/2;
}

var c1 = average(4,5);
var c2 = average(6, 7);
console.log(c1);
console.log(c2);

//conditionals in js

var age = 90;
if( age < 18){

    console.log("You are not a kid");
}else{

    console.log("You are a kid");
}

var arr= [1,2,3,4,5,6];
for(var i=0; i< arr.length; i++){
    console.log(arr[i]);
}

//for each loop
arr.forEach(function(element){ //array ke har element keliye yeh function chalega
    console.log(element);
})

//while loop

let j=0; //let variables ka scope within the bracket rehta hai, koi function ke andar let use kiya to uss function ke bahar uss let variable ko access nhi kr skte
const ac = 0; // constant variables ko value assign nhi kr skte ekbar karne ke bad
//ac = ac + 1; //error throw karega

while( j < arr.length){
    console.log(arr[j]);
    j++;
}
