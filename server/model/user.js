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


// User.statics.findByUsername = function (name) {
//     return this.findOne({ 'name': name }).exec();
// };

// User.statics.localRegister = function ({ email, password, name }) {
//     // 데이터를 생성 할 때는 new this() 를 사용합니다.
//     const user = new this({
//         email,
//         password: hash(password),
//         name
//     });
//     return user.save();
// };

// User.methods.validatePassword = function (password) {
//     // 함수로 전달받은 password 의 해시값과, 데이터에 담겨있는 해시값과 비교를 합니다.
//     const hashed = hash(password);
//     return this.password === hashed;
// };

module.exports = mongoose.model('User', User);
//MODEL needs 2 parameters 1.Schema Name 2. Schema Object

