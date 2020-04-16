const User = require('../model/user');

exports.create = async (ctx) => {
    // request body 에서 값들을 추출합니다
    const {
        email,
        password,
        name
    } = ctx.request.body;

    const user = new User({
        email,
        password,
        name
    });

    try {
        await user.save();
    } catch (e) {
        // HTTP 상태 500 와 Internal Error 라는 메시지를 반환하고, 
        // 에러를 기록합니다.
        return ctx.throw(500, e);
    }

    ctx.body = user;
}
