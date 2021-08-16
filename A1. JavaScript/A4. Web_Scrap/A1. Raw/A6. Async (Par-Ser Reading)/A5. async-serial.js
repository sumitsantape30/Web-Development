//agar muje wahi files async mai serially read karni hai to
let fs= require("fs");
console.log("Before");
fs.readFile("f1.txt", cb); //async function hai to cb rahega
//yaha readFileSync nhi ayega async hai yaha
function cb(error, content){
    console.log("content:"+content);
    //agar muje pehli file read karne ke bad turant dusri file read karni hai to yaha woh function call karna padega
    fs.readFile("f2.txt",cb1);
}

function cb1(err, content){
    console.log("content:"+content);
    fs.readFile("f3.txt", cb2);
}

function cb2(err, content){
    console.log("content:"+content);
}

console.log("After");

/* Output:
Before
After
content:I am f1
content:I am f2
content:I am f3
*/
