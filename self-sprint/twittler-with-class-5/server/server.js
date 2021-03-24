// 사용할 middleWare를 불러옴
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

// express를 사용하기 위한 변수 선언
const server = express();
const router = express.Router();
const port = 8080;

// 저장할 저장소 생성
let memory = {
  tweets: [],
};

// 자료저장소에 있는 data를 server로 가져와서 memory에 쌓음
fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    return;
  }
  memory = JSON.parse(data);
});

// router가 bodyParser middleWare를 사용하겠다는 의미
router.use(bodyParser.json());

// router 함수 시작
router
  .route('/messages')
  .get((req, res) => {
    console.log(req);
    res.status(200).json(memory);
  })
  .post((req, res) => {
    memory.tweets.push(req.body);
    // writeFile은 해당 path에 data.json파일이 없으면 생성하고, 있으면 수정하는 기능
    fs.writeFile('./data.json', JSON.stringify(memory), (err) => {
      if (err) throw err;
    });
    res.status(201).json(req.body);
  });
// 만일 추가 라우팅이 필요하다면
// .route(주소)를 이용해 추가 라우팅이 가능하다.

server.use(cors());
server.use('/', router);
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});