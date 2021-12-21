<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="Icons/favi.png" type="image/gif" sizes="16x16"> 
    
    <link rel="stylesheet" href="style.css"> 
    <title>White board</title>

</head>
<body>
       <div class="options-cont">
           <i class="fas fa-bars"></i>
       </div>
       <div class="tools-cont scale-tools">
           <img class="pencil" src="Icons/pencil1.svg">
           <img class="eraser" src="Icons/eraser1.svg">
           <img class="download" src="Icons/download.svg">
           <img class="upload" src="Icons/upload.svg">
           <img class="stickynote" src="Icons/stickynote.svg">
           <img class="undo" src="Icons/arrow-undo2.svg">
           <img class="redo"src="Icons/arrow-redo2.svg">
       </div>
       <div class="pencil-tool-cont">
           <div class="pencil-width-cont">
                <input class="pencil-width" type="range" min="2" max="10" value="3">
           </div>
           <div class="pencil-color-cont">
               <div class="black pencil-color"></div>
               <div class="blue pencil-color"></div>
               <div class="green pencil-color"></div>
               <div class="red pencil-color"></div>
           </div>
       </div>
       <div class="eraser-tool-cont">
           <input class="eraser-width" type="range" min="2" max="10" value="3">
       </div>

       <canvas></canvas>
       <script src="https://cdn.socket.io/4.4.0/socket.io.min.js" integrity="sha384-1fOn6VtTq3PWwfsOrk45LnYcGosJwzMHv+Xh/Jx5303FVOXzEnw0EpLv30mtjmlj" crossorigin="anonymous"></script>
       <script>
           let socket = io.connect("https://whiteboard-30.herokuapp.com");
       </script>
       <script src="tools.js"></script>
       <script src="canvas.js"></script>

       <footer class="name">Made with ❤️ by <a href="https://linktr.ee/sumitsantape" target="blank">Sumit Santape</a> </footer>

</body>
</html>
