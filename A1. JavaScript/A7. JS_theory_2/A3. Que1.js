//Open PDF and Book for dry run

/Q1
function outer() {
    let arrFn = [];
    for (var i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();

arrFn[0]();
arrFn[1]();
arrFn[2]();
//Output: 3,3,3

//=============================================================
//agar apko output 0,1,2 chahiye

function outer() {
    let arrFn = [];
    for (var i = 0; i < 3; i++) {
        arrFn.push((function fn() { //jaisehi i ki value aayi function ko call karke print kardiya
            console.log(i);
        })()); //iss function ko yahipe call kardo to loop chalte chalte hi function call hojayega yeh function aur print kardega
    }
    return arrFn;
}
outer();
----
function outer() {
    let arrFn = [];
    for (var i = 0; i < 3; i++) {
        function outerfn() {
            var j = i;
            return function fn() {
                console.log(j,i);
            }
        }
        arrFn.push(outerfn())
    }
    return arrFn;
}
let arrFno = outer();
arrFno[0]();
arrFno[1]();
arrFno[2]();

Output:
0 3
1 3
2 3

//================================================================
//agar humne loop ke andar var ki jagah let use kiya (PDF and book open karna for dry run)
// let ki case mai closure nhi banta apkse jo values hoti hai woh block se mil jati hai

function outer() {
    let arrFn = [];
    // local -> 3
    // let i = 0
    // 
    // block 0,block 1 ,block 2
    for (let i=0; i < 3; i++) {
        // block scope
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();

arrFn[0]();
arrFn[1]();
arrFn[2]();

//====================================================================
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000);
// }
//Output: 3 3 3 , yeh bhi dusra tarika hai of asking question

//==================================================================

function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(count);
        console.log(message);
    }
    return [increment, log];
}
const arr = createIncrement();
let increment = arr[0];
let log = arr[1];
increment();
increment();
increment();
log();
