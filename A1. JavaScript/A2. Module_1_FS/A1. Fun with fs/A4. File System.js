//fs ek module hai jahape implmentation di hui hai files aur folders se interact karneki
let fs= require("fs");
let content= fs.readFileSync("f1.txt") // koi file read karni hai, isme hum file ki path provide krte hai, basically iss file mai pda hua content lake dega muje in the form of binary buffer

console.log("Content: ", content); // jab read krte ho to by default yeh buffer mai deta hai, ab isko video, audio mai convert karna hai tumhari marzi
//jo file hum read krte hai uske andar jo content aata hai woh binary mai aata hai jisko buffer bhi kaha jata h, and yahape buffer hexadecimal form mai ata hai aur + kiya to woh text mai convert hojata hai
console.log("Content: "+ content); // yaha + krne se concate hoke string mai convert karke in a string form print kr skte ho

// technical word for folders is directory
// files ke upar hum read/write/update/delete kr skte hai

//write : writeFileSync, agar file create karni hai 
// agar file exist nhi krti to writFileSync aapke liye file create kardega aur usme content put kardega
// if file does exist to content override kardega
fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai"); // isme hum file name ke sath kuch content put kar skte hai
// apne aap ek file create hogi named abc.txt

//append
// append bhi wahi krta hai, agar file exist nhi krti to file create karega aur content put karega aur agar file already exist krti hai to yeh content uss content mai append krdega
fs.appendFileSync("abc.txt", "Bhai khush kyu nhi hai"); //file ki name ke sath woh content ko update kardega, yahi content upar wale content ke sath append hojayega

//delete
fs.unlinkSync("abc.txt"); //isse sara content delete hojayega, woh file abc.txt bhi remove hojayegi
console.log("File Removed");
