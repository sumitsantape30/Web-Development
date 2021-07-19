//Today's Topic : Input, string, Array

let a= 10;
let str= "Hello I am \n String"+ a; //String mai concatenate karne keliye +a kr skte hai. String word muje next line mai chahiye so mai waha enter nhi mar skta siliye \n hai
console.log(str); 
str= "Hello I am also a \nString" + a; // double quote or single quote wali string same hi hoti hai

//aur ek tarika hai for string
// usko hum template string bolte hai, it is enclosed inside backtick
let str= `Hello_I_am a template String ${a}`; //isme iss tarah se concatenate krte hai. isme next line mai print karke keliye direct string mai enter press kr skte ho no need to put \n
console.log("Actual String: ",str);

let charAt4= str.charAt(4); //to get character on that index
console.log("Character at 4: ",charAt4);

//slice means part bhi get kr skte hai from starting index to ending index-1
let sliceStr= str.slice(4, 10); // print hote waqt 10 include nhi hoga
console.log("sliced",slicedStr);

//toLowerCase and toUpperCase yeh bhi function hota hai

//String ko array of String mai convert karne keliye
// on the basis of delimater -> array of String
let ArrayStr= str.split("a");
console.log("Array of String", ArrayStr);

//to get the length
let length= str.length;
console.log(length);

// agar koi string mai front aur back pe spaces hai, woh koi kam ke nhi so unko manage karenge
let str= "   Hello How Are You   "; // spaces useless hai so string ko trim karenge
let trimmedStr= str.trim();
// console.log(trimmedstr);
let arrString= trimmedStr.split(" "); // mai trimmed string ko spaces ke basis ke around split kr rha hu
console.log("arr String", arrString);
// convert array of string into a string on the basis of delimeter

let ans= arrString.join("+"); // string array ke har character ke bad + dal rhe hai
console.log(ans);


