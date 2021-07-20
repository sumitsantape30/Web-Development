//onject represent krta hai kisiko

//empty object create karne keliye
let obj= {};

//key: value pairs hoti hai
//key ek string, number ho skti hai
// valur kuch bhi le skte ho
let cap= {
    name: "Steve",
    lastName : "Rogers",
    friends : ["Peter","Bruce","Tony"],
    isAvenger : false,
    age : 34,
    sayHi : function(){
        console.log("Cap says Hi");
    },
    address:{ // object ke andar bhi object bana skte ho
        state: "New York",
        city: "NY City",
    }

} // yeh mera object bana hai 

//to print the object
console.log(cap);
//to access the properties
//we access using .(dot) notation.
console.log("name", cap.name);
console.log("friends", cap.friends[1]);
console.log("Age", cap.age);

//if not present to undefined dega
console.log("movies", cap.movies);
// to access the functions
cap.sayHi();

//so humne yaha .(dot) ki help se chize access kari

Output:
{
  name: 'Steve',
  lastName: 'Rogers',
  friends: [ 'Peter', 'Bruce', 'Tony' ],
  isAvenger: false,
  age: 34,
  sayHi: [Function: sayHi],
  address: { state: 'New York', city: 'NY City' }
}
name Steve
friends Bruce
Age 34
movies undefined
Cap says Hi

===============================================================================================================================
  
 
let cap= {
    name: "Steve",
    lastName : "Rogers",
    friends : ["Peter","Bruce","Tony"],
    isAvenger : false,
    age : 34,
    sayHi : function(){
        console.log("Cap says Hi");
    },
    address:{ 
        state: "New York",
        city: "NY City",
    }

} 

// another way to access the properties is by square bracket []
let varName= "address";
console.log("address", cap[varName]);
console.log("address",cap.varName); // . exact jake search krta hai object mai so yaha yeh undefined deta hai

Output:
address { state: 'New York', city: 'NY City' }
address undefined

=========================================================================================================================
  
  
let cap= {
    name: "Steve",
    lastName : "Rogers",
    friends : ["Peter","Bruce","Tony"],
    isAvenger : false,
    age : 34,
    sayHi : function(){
        console.log("Cap says Hi");
    },
    address:{ 
        state: "New York",
        city: "NY City",
    }

} 

// another way to access the properties is by square bracket []
let varName= "address";
console.log("address", cap[varName]);
console.log("address",cap.varName); // . exact jake search krta hai object mai so yaha yeh undefined deta hai


//agar loop karna hai iska andar, iske liye "for in" loop hota hai object ke andar
for( let key in cap){ //iss key ke andar ek ek key aate rahegi (iss "key" variable ko "pro" ya fir kuch bhi nam de skte ho)
    //console.log(key); // yeh sari keys print karega

    console.log(key, " : ", cap[key]);
}

Output:

name  :  Steve
lastName  :  Rogers
friends  :  [ 'Peter', 'Bruce', 'Tony' ]
isAvenger  :  false
age  :  34
sayHi  :  [Function: sayHi]
address  :  { state: 'New York', city: 'NY City' }

======================================================================================================================


let cap= {
    name: "Steve",
    lastName : "Rogers",
    friends : ["Peter","Bruce","Tony"],
    isAvenger : false,
    age : 34,
    sayHi : function(){
        console.log("Cap says Hi");
    },
    address:{ 
        state: "New York",
        city: "NY City",
    }

} 

console.log(cap);
//agar muje new key add karni hai
cap.movies= ["first Avenger", "Civil War", "Winter Soldier"];
cap.age= 45; //agar chize update karni hai

//agar delete karni hai
delete cap.address; //cap ke andar address delete karne keliye
//delete cap.address.city -> address ke andar city delete karne keliye
console.log("`````````````````");
console.log(cap);

Output:
{
  name: 'Steve',
  lastName: 'Rogers',
  friends: [ 'Peter', 'Bruce', 'Tony' ],
  isAvenger: false,
  age: 34,
  sayHi: [Function: sayHi],
  address: { state: 'New York', city: 'NY City' }
}
`````````````````
{
  name: 'Steve',
  lastName: 'Rogers',
  friends: [ 'Peter', 'Bruce', 'Tony' ],
  isAvenger: false,
  age: 45,
  sayHi: [Function: sayHi],
  movies: [ 'first Avenger', 'Civil War', 'Winter Soldier' ]
}
