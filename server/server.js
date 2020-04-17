const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const url = 'mongodb://localhost:27017/study_group_management';
const router = require('./router');


app.use(require('cors')());

mongoose.connect(process.env.MONGODB_URI || `${url}`);

//Mongoose Connection Check
mongoose.connection.on('connected', () => {
    console.log(`mongoose connection open to ${url}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`mongoose connection err: `, err);
});

//use Body Parser for Json Obeject
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


///////////////////////////////////////////////////////////////////
app.get('/api/hello', (req, res) => {
    res.send({
        message: 'hello express!'
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/api', router);
