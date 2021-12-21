let canvas = document.querySelector("canvas");
let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");
let download = document.querySelector(".download");
let undo = document.querySelector(".undo");
let redo = document.querySelector(".redo");

let undoRedoTracker = []; // data
let track = 0; // represents which actions done from tracker array

let penColor = "red";
let eraserColor = "white"; 
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let mouseDown = false;
// API -> help to draw graphics
let tool = canvas.getContext("2d");

// strokeStyle -> color
tool.strokeStyle = penColor;
// lineWidth -> width( thickness ) 
tool.lineWidth = penWidth;

// mousedown -> start new path, mousemove -> path fill (graphics)
canvas.addEventListener("mousedown", (e) => {
    mouseDown = true;
    // beginPath({
    //     x: e.clientX,
    //     y: e.clientY
    // });
    let data = {
        x: e.clientX,
        y: e.clientY  
    }
    socket.emit("beginPath", data);
})

canvas.addEventListener("mousemove", (e) => {
    if (mouseDown) {
        let data = {
            x: e.clientX,
            y: e.clientY,
            color: eraserFlag ? eraserColor : penColor,
            width: eraserFlag ? eraserWidth : penWidth
        }
        socket.emit("drawStroke", data);  
    }
    // drawStroke({
    //     x: e.clientX,
    //     y: e.clientY,
    //     color: eraserFlag ? eraserColor : penColor,
    //     width: eraserFlag ? eraserWidth : penWidth
    // });   
})

canvas.addEventListener("mouseup", (e) => {
    mouseDown = false;

    let url = canvas.toDataURL();
    undoRedoTracker.push(url);
    track = undoRedoTracker.length - 1;
})

undo.addEventListener("click", (e) => {
     if (track > 0){
         track--;
     }
     // track action
     let data = {
        trackValue: track,
        undoRedoTracker
    }
    //  undoRedoCanvas(trackObj);
    socket.emit("redoUndo", data);
})

redo.addEventListener("click", (e) => {
    if (track < undoRedoTracker.length - 1){
        track++;
    }
    // action
    let  data = {
        trackValue: track,
        undoRedoTracker
    }
    // undoRedoCanvas(trackObj);
    socket.emit("redoUndo", data);
})

function undoRedoCanvas(trackObj) {
      track           = trackObj.trackValue;
      undoRedoTracker = trackObj.undoRedoTracker;
     
      let url = undoRedoTracker[track];
      let img = new Image(); // new image reference element
      img.src = url;
      img.onload = (e) => {
          tool.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
}

function beginPath(strokeObj){
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}

function drawStroke(strokeObj){
    tool.strokeStyle = strokeObj.color;
    tool.lineWidth = strokeObj.width;
    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();
}

pencilColor.forEach((colorElem) =>  {
    colorElem.addEventListener("click", (e) => {
        let color = colorElem.classList[0];
        // console.log(color);
        penColor = color;
        tool.strokeStyle = penColor;
    })
})

pencilWidthElem.addEventListener("change", (e) => {
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth;
})

eraserWidthElem.addEventListener("change", (e) => {
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = eraserWidth;
})

eraser.addEventListener("click", (e) => {
    if( eraserFlag ){
        tool.lineWidth = eraserWidth;
        tool.strokeStyle = eraserColor;
    } else {
        tool.strokeStyle = penColor;
        tool.lineWidth = penWidth;
    }
})

download.addEventListener("click", (e) => {
    let url = canvas.toDataURL()

    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";
    a.click();
})

socket.on("beginPath", (data) => {
    // data from server
    beginPath(data);
})
socket.on("drawStroke", (data) => {
    // data from server
    drawStroke(data);
})
socket.on("redoUndo", (data) => {
    // data from server
    undoRedoCanvas(data);
})
