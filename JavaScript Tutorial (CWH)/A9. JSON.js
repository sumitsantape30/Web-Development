//JSON : javaScript object notation,
// it is used to exchange the data

obj = {
    'name': 'Sumit',
    'Surname': 'Santape',
    a : {
        'this': 'that',

    }
}

jso = JSON.stringify(obj); //yeh object json string mai convert hojayegi
console.log(jso); //jso ek string hai, can check by using typeof(jso) function
//kisibhi object ko json string mai or kisi json string ko object mai convert karna hai to 

//json sting ko object mai convert krne keliye
parsed = JSON.parse(`{"name":"Sumit","Surname":"Santape","a":{"this":"that"}}`); //uparwale object ka json string pass kr rhe hai
console.log(parsed);
