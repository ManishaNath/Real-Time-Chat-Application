const express = require("express");
const app = express();
const http = require("http"); 
const path = require("path");
const server = http.createServer(app); 
const socketio = require("socket.io");
const {
  newUser,
  getIndividualRoomUsers,
  formatMessage,
  getActiveUser,
  exitRoom,
} = require("./helpers/helper");
const io = socketio(server); 

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = newUser(socket.id, username, room); 
    console.log("Server has created a new User", user);
    socket.join(user.room); 
   
    socket.emit(
      "message",
      formatMessage(
        "Blockchain Chat-Room",
        "Messages are limited to this room! "
      )
    );


    socket.broadcast.to(user.room).emit(
      "message",
      formatMessage(
        "Blockchain Chat-Room",
        `${user.username} has joined the room`
      )
    );

    // Current active users and room name
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getIndividualRoomUsers(user.room),
    });
  });

  // Listen for client message
  socket.on("chatMessage", (msg) => {
    const user = getActiveUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = exitRoom(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(
          "Blockchain Chat-Room",
          `${user.username} has left the room`
        )
      );

      // Current active users and room name
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getIndividualRoomUsers(user.room),
      });
    }
  });
});

//// Set public folder
app.use(express.static(path.join(__dirname, "public"))); 

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running and listening at http://localhost:${port}`);
});



// npm install --save express moment socket.io
