// backend.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Cổng cho máy chủ backend

app.use(bodyParser.json());

app.post('/sendData', (req, res) => {
  const { data } = req.body;
  // Xử lý dữ liệu ở đây và gửi phản hồi về phía frontend
  console.log('Dữ liệu nhận được từ frontend:', data);
  res.json({ message: 'Dữ liệu đã được xử lý thành công.' });
});

app.listen(port, () => {
  console.log(`Máy chủ backend đang lắng nghe tại http://localhost:${port}`);
});
