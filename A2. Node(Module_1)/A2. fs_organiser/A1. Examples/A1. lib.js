//aap kisi file se dursi file mai function or variable export kr skte ho but apko define krte pdta hai ki konsa function and variable export karna hai

let a=10;
function fn(){
    console.log("Hello I an fn");
    return "Hello";
}

function notTOBeexport(){
    cinsole.log("I don't want to be exported");
}

// tumhe kuch bhi export karna hota hai to object ki form mai export karna hota hai
module.exports= {
    varName: a,
    fxn: fn,
}
