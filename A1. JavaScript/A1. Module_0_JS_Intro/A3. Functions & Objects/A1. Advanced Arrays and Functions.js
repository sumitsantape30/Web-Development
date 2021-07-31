//declaration
let arr=[];

//array is a collection of homogenous data types, this is the definition in  JAVA and CPP
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
  
  //function definition
 function fn(){
    console.log("I am a function");
    return 10;
}

//function ko call karna means function invocation
let rVal= fn(); // function call hoke andar ka statement print hoga, aur woh function jo value return kr rha hai use rVal mai catch karenge
console.log(rVal);
console.log("Function", fn); // function ko print karre

Output:
I am a function
10
Function [Function: fn]

--------------------------------------------------------------------------------------------------------------

let arr = [1,
    true,
     1.1,
      "string",
       null,
        [1,2,3,4,5],
         function fn(){
    console.log("Hello I am a function inside an array")
    return "rval from a fn";
}]

console.log(arr[arr.length-1]); // yeh bas function ka address mang rha hai, 
// let rval= arr[arr.length-1]() aise karke bhi rval ko print kar skte hai
console.log(arr[arr.length-1]()); // yahape mai uss function ke address pe gya aur uss function ko call kardiya. Aur woh function jo value return kar rha hai woh print hogi

Ouput: 
[Function: fn]
Hello I am a function inside an array
rval from a fn

--------------------------------------------------------------------------------------------------------------

function fn(){
    console.log("Hello I am a function")
    return "Hello";
}

let tempArr= [1,2,3,15,5];
let temp1Arr= tempArr;
let arr = [
    1,
    true,
    1,1,
    "string",
    null,
    temp1Arr,
    fn
];

console.log("2DArray", arr[arr.length-2]); // array print hoga
console.log("access the last element", arr[arr.length-1]); // hum yaha function ka address access kr rhe hai
console.log("access the last element", arr[arr.length-1]()); //yahape use function ko call kr rhe hai aur jo value return ho rhi ahi woh print hogi
// agar mera function koi value return nhi kr rha hai aur mai use print kr rha hu to undefined return kardega

Output:
2DArray [ 1, 2, 3, 15, 5 ]
access the ast element [Function: fn]
Hello I am a function
access the last element Hello

======================================================================================================================================
  
  function fn(){
    console.log("Hello I am a function")
    return "Hello";
}


let rval= fn(); // yaha hum function call honese pehle rval print nhi kr skte same thing niche wale mai bhi hai
console.log("rval", rval);
console.log("```````");
console.log("rVal", fn()); //yahape bhi function call hone se hele hum console wali line print nhi kr skte

Output:
Hello I am a function
rval Hello
```````
Hello I am a function
rVal Hello

==================================================================================================================================
  
 function fn(){
     fn1();
    console.log("Hello I am a function")
    return "Hello";
}

function fn1(){ //agar humne fn1 print kiya to woh undefined dega koi value return nhi kr rha
    console.log("I am fn1");
}

let rval= fn(); // yaha hum function call honese pehle rval print nhi kr skte same thing niche wale mai bhi hai
console.log("rval", rval);
console.log("```````");
console.log("rVal", fn()); //yahape bhi function call hone se pehele hum console wali line print nhi kr skte

Output:
I am fn1
Hello I am a function
rval Hello
```````
I am fn1
Hello I am a function
rVal Hello

=============================================================================================================================================

 function fn(){
    let val= fn1();
    console.log(val);
    console.log("Hello I am a function")
    return "Hello";
}

function fn1(){ // fn1 ab value return kr rha hai so isko print karenge to ab undefined nhi ayega woh returned value print karega
    console.log("I am fn1");
    return 10;
}

let rval= fn(); 
console.log("rval", rval);
console.log("```````");
console.log("rVal", fn()); 
console.log("=========");
console.log(fn1());

Output:
I am fn1
10
Hello I am a function
rval Hello
```````
I am fn1
10
Hello I am a function
rVal Hello
=========
I am fn1
10
