const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5557;
const router = require('./router');
const cors = require('cors');

app.use(cors());

//use Body Parser for Json Obeject
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//api 경로 router 설정
// app.use('/api', router);
app.use('/api', router);


//Error Handling 404
//에러핸들러가 router위에있으면 다 404처리됨.
app.use(function (reqest, response, next) {
    console.warn("404 Page Not Found", reqest.url);
    response.sendStatus(404);
    return;
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));
