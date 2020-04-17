const User = require('../model/user');

createUser = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'you need a user'
        })
    }

    const user = new User(body);

    if (!User) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                email: user.email,
                password: user.password,
                name: user.name
            })
        })
        .catch(error => {
            return res.status(400).json({
                success: false
            })
        })
}

// exports.create = async (req) => {
//     // request body 에서 값들을 추출합니다
//     const {
//         email,
//         password,
//         name
//     } = req.body;

//     const user = new User({
//         email,
//         password,
//         name
//     });

//     try {
//         await user.save();
//     } catch (e) {
//         // HTTP 상태 500 와 Internal Error 라는 메시지를 반환하고, 
//         // 에러를 기록합니다.
//         return req.throw(500, e);
//     }

//     req.body = user;
// }

module.exports = {
    createUser
}