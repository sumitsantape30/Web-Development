//hume isme data mangana hai
// npm i request
let request= require("request");
console.log("Before"); //request karne se pehle
request('http://www.google.com' , cb); //yeh request bhi async tarike se kam krti hai coz hume nhi pta google kahase kitni der mai ayega. so yaha tum data pass karo aur agla call back pass karo 
function cb(error, response, html) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    if( error){
        console.log(error); //agar error hai to erro print krdo
    }else if(response.statusCode == 404){ //agar hume response aa rha hai aur uska status code 404 hai 
        console.log("Page Not Found");
    }
    else{
        //console.log(html); isse pura google ka html code ajayega
        console.log("html:", ) 
    }
  }
  console.log("After");
