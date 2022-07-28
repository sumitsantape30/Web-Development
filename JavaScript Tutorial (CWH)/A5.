=========================== index.html ====================================================
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            border: 20px solid red;
            margin: 3px 0;
            background-color: cyan;
            padding: 9px;
        }

        .bg-primary{
            background-color: blueviolet;
        }



    </style>
</head>
<body>

    <div class="container">

        <h1>Welcome to the jS Tutorial</h1>

        <div id="firstcontainer">
        
        <!-- yeh button click hone pe yeh clicked() function call hoga -->
        <button id="click" onclick="clicked()">Click me</button>

        <div class="container"> This is another container</div>

        <div class="container-1"> This is container 1</div>

        </div>

        <p  id ="text">This is paragraph</p>

    </div>


    <script src="code.js"> </script>
</body>

</html> 

=============================================== code.js==============================================

//DOM manupulation

//document.getElementById used when you want to target an element by its identfier

// document.getElementById('click').click(); button pe click hojayega

//document.getElementById('click').style.border = '5px solid blue'; //so dynamically apne page ke content ko change kr skte using js

let elem = document.getElementById('click')

console.log(document.getElementById('click')); //yeh click id ka complete button ka tag dega

let elemClass = document.getElementsByClassName('container'); //jitne bhi containers hai woh ek array ke form mai elemClass mai ajayenge, HTML collection
console.log(elemClass);

elemClass[0].style.background = "yellow";

//yeh kam inspect krke console mai karke dekhna, actual code mai changes nhi ayenge
//humne css mai ek banaya bg-primary, iss class ko iss elemClass ke andar add karegne
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add("text-success");

elemClass[0].classList.remove("text-success");

console.log(elemClass.innerHTML); //isse iss element ke andar ki sari html mil jayegi
console.log(elemClass[0].innerText); //sara text form dedega

console.log(elem.innerHTML); // yeh complete html deti hai
console.log(elem.innerText); //yeh inner text dega jo html ke andar hai

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

//to get the element by class name

let elemClassName = document.getElementsByClassName("container-1");
console.log(elemClassName);

let elembytag = document.getElementsByTagName("div");
console.log(elembytag);

//ab ek element banayenge and usko elembytag mai dal denge
let createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"; //aur uss naye element ke andar yeh text hoga
elembytag[0].appendChild(createdElement);

//ab replacechild karenge
let createElement2= document.createElement('b');
createElement2.innerText = "This is created bold";
elembytag[0].replaceChild(createElement2, createdElement);

//removechild
// removeChild(element) --> it remove an element

//selecting element using query
let sel = document.querySelector('.container'); //yeh sirf ek element return karega, pehla container class ka element de dega
console.log(sel);

let sel2 = document.querySelectorAll('.container'); //yeh nodelist dega sare containers ka element de dega
console.log(sel2);


// Event Listeners
//we can add event listeners using HTMl as well

//button pe click hone se html doc mai yeh function call kardega
function clicked(){ 
    console.log("This button was clicked");
}

window.onload = function(){
    console.log("The page is loaded");
}
//page load hone ke bad yeh function chalega

//agar muje ek paragraph pe event lagana hai

//uss container pe click karne se yeh function call hoga.
//addEventListener(event, function());
firstcontainer.addEventListener('click', function(){
    console.log(" first container Click hua ");
})

firstcontainer.addEventListener('mouseover', function(){
    console.log(" container ke upar mouse hover hua ");
})
//jaisehi mouse ko container ke andar leke jaoge to yeh function call hoga

firstcontainer.addEventListener('mouseout', function(){
    console.log(" mouse out of container hua ");
})
//mouse jaisehi container ke bahar jayega to yeh function call karega

//jab apne mouse ko click krke chhod diya
firstcontainer.addEventListener('mouseup', function(){
    console.log(" mouse up on container hua ");
})

//mouse down krke apne hold karliya to
firstcontainer.addEventListener('mousedown', function(){
    console.log(" mouse down on container hua ");
})

//ab mai chahta hu ki iss text  pe click hua to text change hojaye
// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>";

// })

//ab mai chahta hu ki 
let prevHTML =      document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"; //previous HTML ko store krke rakh
firstcontainer.addEventListener('mousedown', function(){
    //ab jaisehi mouse chhodta hai mai chahta hu iske innerHTML hai woh prevHTML ban jaye
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log(" mouse down on container hua ");
})

firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>";
    console.log(" mouse up on container hua ");
})

