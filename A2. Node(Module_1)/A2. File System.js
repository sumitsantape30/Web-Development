//fs ek module hai jahape implmentation di hui hai files aur folders se interact karneki
let fs= require("fs");
let content= fs.readFileSync("f1.txt") // koi file read karni hai, isme hum file ki path provide krte hai

console.log("Content: ", content); // jab read krte ho to by default yeh buffer mai deta hai, ab isko video, audio mai convert karna hai tumhari marzi
console.log("Content: "+ content); // yaha + krne se concate hoke string mai convert hogya, and a string is a text isliye iska output text mai ayega

// technical word for folders is directory
// files ke upar hum read/write/update/delete kr skte hai
//write : writeFileSync
// agar file exist nhi krti to writFileSync aapke liye file create kardega aur usme content put kardega
// if file does exist to content override kardega
fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai"); // isme hum file ki path ke sath kuch content put kar skte hai
// apne aap ek file create hogi named abc.txt
//update
fs.writeFileSync("abc.txt", "Bhai khush kyu nhi hai"); //file ki path ke sath woh content ko update kardega
fs.unlinkSync("abc.txt"); //isse sara content delete hojayega, woh file abc.txt bhi remove hojayegi
console.log("File Removed");

//ab folders ke around kam karenge

