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
//================================================================
// agar apko 0 1 2 hi print karna hai but without call function inside the loop




