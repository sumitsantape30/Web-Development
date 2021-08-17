let fs= require("fs");
console.log("Before");
let data= fs.readFileSync("f1.txt");
console.log(""+data); //string mai convert karo taki binary mai convert krke print na ho
console.log("After"); 
// so sync bilkul line by line chalega, before print karne ke bad woh jabtak puri file rad nhi karleta data ke andar tabtak after print nhi hoga. meanwhile time mai mai bhi kuch nhi kr skta muje bhi wait karte rehna pdta hai
//so mere pas async functions hai
------------------------------------------------------
let fs= require("fs");
console.log("Before");
let data= fs.readFileSync("f1.txt");
//so JS jaha bhi hoti hai uske environment mai usko kuch functionalities dete hai jiske throught yeh wale kam alag tarike se ho
//so yeh wala kam hum krne keliye kisi aur ko denge
fs.readFile("f1.txt", cb); //yeh bolta hai ki muje call back do
//readFile jab file read karlega to humare iss cb ko call kardega
function cb(error, data){ //iska pehla parameter humesha error hota hai and dusre mai jo data aya hai woh dega
    if( error){
        console.log("error");
    }else{
        console.log("data"+ data);
    }
}
console.log("After"); 
console.log("meanwhile");
//so iska code flow hoga, before then file read karna start kardega lekin woh answer abhi nhi dega badme dega to pehle after aur meanwhile print hojayega

