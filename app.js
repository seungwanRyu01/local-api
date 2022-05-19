const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const { posts } = require('./data.js');

app.use(cors());
// api주소에서 요청이 들어오면 request와 response를 반환한다.
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => console.log(`serer runnning on ${PORT}`));