const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET /some으로 요청이 들어올 경우 소켓접속자에게 데이터를 전송
app.get("/some", (req,res) => {
  console.log("------------")
  const io = app.get("io")
  io.emit("tasks", { id: 9999})
  res.send("Hi")
});

app.listen(port, () => {
  console.log(`http://localhost:${port}로 서버 열림`)
})