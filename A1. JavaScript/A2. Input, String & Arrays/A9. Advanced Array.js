//declaration
let arr=[];

//array is a colloection of homogenous data types, this is the definition in  JAVA and CPP
//array is a colllection of anything, this is in JS
let arr= [1,true, 1.1, "string", null, [1,2,3,4,5]]; // mai isme intialise krte waqt array ka type nhi bta rha so isme hum koi bhi type ki values dal skte hai, so humne isme 1D array bhi dal diya
console.log(arr); //complete array print hoga
console.log("arr",arr[2]); 
console.log("extract 3 from 2dArray", arr[arr.length-1][2]); //arr mai jo 1D array hai uske 2nd index pe jo value hai use access karne keliye

---------------------------------------------------------------------------------------------------
  
let arr = [1,
    true,
     1.1,
      "string",
       null,
        [1,2,3,4,5],
         function fn(){
    console.log("Hello I am a function inside an array")
}]; //array ke andar mai function bhi dal skta hu

console.log(arr);

Output:
[ 1, true, 1.1, 'string', null, [ 1, 2, 3, 4, 5 ], [Function: fn] ]

-----------------------------------------------------------------------------------------------------
  
 function fn(){
    console.log("I am a function");
}

fn(); // function all hoke andar ka statement print hoga
console.log("Function", fn); // function ko print karre

Output:
I am a function
Function [Function: fn]
