const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

//表示するファイル
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("ユーザーが接続いたしました。");
  socket.on("chat message", (msg) => {
    console.log("メッセージ：" + msg);
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log("サーバーが起動いたしました。");
});
