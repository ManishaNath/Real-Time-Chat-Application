// helper/Helper.js
const moment = require("moment");
const roomUsers = [];

//adding time to message
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}

// Join user to chat
function newUser(id, username, room) {
  const user = { id, username, room };
  roomUsers.push(user); // new user joined will be pushed to array
  return user;
}
// Get room users - filters the user based on the room that usr joined
function getIndividualRoomUsers(room) {
  return roomUsers.filter((user) => user.room === room);
}

// Get current user
function getActiveUser(id) {
  return roomUsers.find((user) => user.id === id);
}

// User leaves chat
function exitRoom(id) {
  const index = roomUsers.findIndex((user) => user.id === id);

  if (index !== -1) {
    return roomUsers.splice(index, 1)[0];
  }
}

module.exports = {
  newUser,
  getActiveUser,
  exitRoom,
  getIndividualRoomUsers,
  formatMessage,
};

