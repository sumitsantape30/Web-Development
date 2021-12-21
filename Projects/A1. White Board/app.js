// Socket.io cdn -> 
const express = require("express");
const socket  = require("socket.io");

const app = express(); // Initialized and server ready
const port = process.env.PORT || 8000;

app.use(express.static("public"));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

let server = app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

let io = socket(server);

// on == eventListner
// server is listening actions which is done by one side and which will be transffered to the all connected devices
io.on("connection", (socket) => {
     console.log("Made Socket Connection !!!");
     
    //  Received data
     socket.on("beginPath", (data) => {
        //  data -> data from frontend
        // Now Transfer data to all connected computers 
         io.sockets.emit("beginPath", data);
     });

     socket.on("drawStroke", (data) => {
         io.sockets.emit("drawStroke", data);
     })

     socket.on("redoUndo", (data) => {
         io.sockets.emit("redoUndo", data);
     });
});

// and the data from other side will be send back to the frontend side that's why we emit
