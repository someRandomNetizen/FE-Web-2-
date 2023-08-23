import socketIO from "socket.io-client";

const socket = socketIO("https://365truck.fdssoft.com", {
  path: "/api/socket",
});

// const socket = socketIO("http://localhost:3001", {
//   path: "/api/socket",
// });

export default socket;
