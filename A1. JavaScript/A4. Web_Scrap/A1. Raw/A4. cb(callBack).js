let arr = [1,2,3,4,5];
function smaller(x){ //yeh ek function hai jo squre lake deta hai
    return x*x;
}

function cuber(a){
    return a*a*a;
}

//function can be passed as an argument
//implementation map js -> pre-exist -> arr map
//it will apply the cb fn to all the elements of an array and retrun thr new Arr
function bigger(arr, cb){ //cb ke andar smaller ka hi address pass hua hai, cb and smaller same hi honge
    // function Progamming: chote function ko bade function ke andar pass kr skte ho
    let newArr= [];
    for( let i=0; i< arr.length; i++){
        let sqVal= cb(arr[i]); //yahase woh smaller function call hoga and usme i as a x pass hoga aur woh square lake dega
        newArr.push(sqVal);
    }
    return newArr;
}

let sqArr= bigger(arr, smaller); //so function call ke andar function pass krte hai 
console.log("arr", sqArr);
let qbArr= bigger(arr, cuber);
console.log("arr", qbArr);

Output:
arr [ 1, 4, 9, 16, 25 ]
arr [ 1, 8, 27, 64, 125 ]
