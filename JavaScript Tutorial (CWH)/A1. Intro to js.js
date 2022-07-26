<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h>Hello</h>
    <h>World</h>

    //div.container se div create hoti hai with its class name
    <div class="container"></div>
    //div.#click se div banti hai with id
    <div id="click">
        <button id="clickme">Click me</button>
    </div>
    <!-- . se class and # se id create hoti hai -->

    <div class="container">
        This is a paragraph
    </div>
   <!-- ids duplicate nhi ho skti, ids unique hoti hai. class dublicate ho skte hai -->
    
   <div id="first-Container"> This is just a text</div>
    
   <!-- document.querySelector(".container") // for targeting the class
   document.getElementById("account-child-invert"); //to get the element by id
   document.getElementsByTagName('h1'); // to get the eleement by tagname, same nam ki multiple tags hogi to it'll give an array
   document.getElementsByTagName('h1')[1] //isse uss array ke 1th index pe rakha element milega
    document.getElementsByTagName("h")[1].style.background = "red"; //aisehi css manipulate kr skte ho -->

    <script>

        console.log("Hello World");
        alert("Hey you");
        
        document.getElementById("clickme");
        
    </script>
</body>

</html> 
