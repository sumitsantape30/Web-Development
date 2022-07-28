
//Arrow function
function sum(a,b){
    return a+b;
}

//can also be written as
sum = (a,b) =>{
    return a+b;
}

//setTimeout and setTimeout

logKaro = ()=>{
    document.querySelectorAll(".container")[1].innerHTML= "<b> Set interval fired </b>";
    console.log("I am you log");
}

//setTimeout(logKaro, 2000); // setTimeout iss function ka ek argument hota hai function(eg. logkaro) and dusra argument hota hai ki woh function kitne time bad execute krna hai
//logkaro function call hoga 2000 miliseconds ke bad

//logkaro ko aap repeatedly karwana chahte ho
//setInterval(logKaro, 2000); //har 2 second bad hota rahega

//setInterval ek id return karta hai uss id ko agar maine clearIntegerval(clr) ke pass kiya to yeh interval shant hojayega
var clr = setInterval(logKaro, 2000);
clearInterval(clr); // console pe iss function ko run karwa do jab bhi setInterval rokna ho

//so use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

