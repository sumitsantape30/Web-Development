============= index.html========================================
  
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script src="code.js"> </script>
</body>

</html> 

//=====================code.js=========================================================================
  
console.log("Hello World");
alert("Hey you");
        
document.getElementById("clickme");

 
//  3. JavaScript Variables
//  what are variables: container to store values 
var number1 = 10;
var number2 = 20;
//console.log(number1 + number2);

//4. datatypes
var str1 = "This is a string";
var str2 = 'This is also a string';

//objects
var marks = {
    'ravi': 34,
    'sumit': 45,
    'ashu': 40
}
//console.log(marks);

//boolean
var a = true;
var b = false;
//console.log(a);

//var und = undefined;
var und;
//console.log(und); //by default bhi undefined hi hot hai

var n = null;
//console.log(n);

// at very high level there are two types of datatypes in JS
// 1. primitive datatypes like undefined, null, string, number, boolean, symbol
// 2. non primitive like Arrays and object

var arr = [1,2,"Bable",4];
//console.log(arr);


//4. Operators in JS
var a  =10;
var b= 20;

console.log("The value of a+b", a+ b);
console.log("The value of a-b", a- b);
console.log("The value of a*b", a* b);
console.log("The value of a/b", a/ b);

//assignment operators
var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

//comparison operators
var x = 36;
var y = 40;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);

//logical operators
// console.log( true && true); //bas yeh true rahega baki sab false rahenge
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

//logical OR: donomese ek true miljaye to true
// console.log( true || true); 
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

//logical not
console.log(!false);
console.log(!true);
