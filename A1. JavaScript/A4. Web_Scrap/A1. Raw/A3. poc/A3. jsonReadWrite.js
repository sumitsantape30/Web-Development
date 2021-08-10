let fs=  require("fs");
let input= ["hello", "hi", "how are you"]; //input mai array milega basically object types
// object ,array 
// object -> contain string as key 
// {
//     "name": "Jasbir"
// }

//json file mai read karna aur write karna json hi decide krta hai. write and append krte waqt stringify karna jaruri hai
//write
let jsonWritable= JSON.stringify(input); //to json mai convert hogya hai
fs.writeFileSync("abc.json", jsonWritable); //run karne ke bad abc.json file ban jayegi aur usme input data chala jayega

//read karna hai to
let content= fs.readFileSync("abc.json");
let jsonData= JSON.parse(content);

//append, append krte waqt bhi stirngify karna padega
jsonData.push("Hola");
let jsonWritable= JSON.stringify(jsonData);
fs.writeFileSync("abc.json", jsonWritable);
