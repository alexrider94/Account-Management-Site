const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./router');


app.use(require('cors'));
//use Body Parser for Json Obeject
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/api', router);
