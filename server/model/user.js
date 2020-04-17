const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

const SECRET_KEY = 'MySecretKey1234';

function hash(password) {
    return crypto.createHmac('sha256', SECRET_KEY).update(password).digest('hex');
}

const User = new Schema({
    email: String,
    password: String,
    name: String,
    thoughtCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);
//MODEL needs 2 parameters 1.Schema Name 2. Schema Object

