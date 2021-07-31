//syntax for empty array
let arr= [];

let arr= [1,2,3,4,5];
console.log(arr);

for(let i=0; i< arr.length; i++){
    console.log(i+" : "+arr[i]); // + liya to typecaste hojayega string mai
    console.log(i ," : ", arr[i]); // yeh typecaste nhi hoga string mai
} //so mostly , wala hi use karo

Output:
[ 1, 2, 3, 4, 5 ]
0 : 1
0  :  1
1 : 2
1  :  2
2 : 3
2  :  3
3 : 4
3  :  4
4 : 5
4  :  5

------------------------------------------------------------------------------------------------------------------------------------
 
 let arr= [1,2,3,4,5,6];

//PSSSI yad rakho

// push pop -> add/remove last
console.log(arr);
arr.pop(); //last wala delete hoga
console.log(arr);
arr.push(18); // sabse last mai  add hojayega
console.log(arr);

//unshift shift -> add/remove first
console.log(arr);
arr.shift(); //first wala delete hoga
console.log(arr);
arr.unshift(18); // sabse first mai  add hojayega
console.log(arr);

//slice -> gives copy of a subarray, and slice ek sliced array ko return karta hai
// startingIndex to endingIndex-1 tak hoga
let slicedArr= arr.slice(1,3); // last index include nhi hota
console.log("SliceedArr", slicedArr); //jo array slice hua woh isme ayega
console.log("arr", arr);
// arr.slice(1); sirf starting index de diya to yahase end tak slice karega

//splice -> deletes any of delete, means iss index se kitne numbers delete karne hai
let removedElems= arr.splice(2,2); // 2nd index se leke 2 bande remove karega means 4 and 5 delete hoga aur baki bacha array de dega
console.log("removed Elements",removedElems);
console.log("arr",arr);

//indexof -> index of an elementin an array agar nhi hai to will print -1
let idx = arr.indexOf(3);
console.log("idx", idx);

//includes -> if check if an element is inside an array

--------------------------------------------------------------------------------------------------------------------
let arr= []; 
function fn(){

}

console.log(typeof fn);
console.log(typeof arr); //yeh object type deta hai
console.log(Array.isArray(arr)); //function to check if it is an array

Output:
function
object
true
