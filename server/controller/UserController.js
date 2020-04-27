const User = require('../model/user');

insertUser = (req, res) => {
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

//////////////////////////////////////////////////////////////////////
getUser = async (req, res) => {
    await User.find({}, (err, user) => {
        if (err) {
            return res.status(400).json({
                sucess: false,
                error: err
            })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getSelectedUser = async (req, res) => {
    await User.findOne({ email: req.body.email, password: req.body.password }, (err, selectedUser) => {
        if (err) {
            return res.status(400).json({
                sucess: false,
                error: err
            })
        }
        if (!selectedUser) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ sucess: true, data: selectedUser })
    }).catch(err => console.log(err))
}

module.exports = {
    insertUser,
    getUser,
    getSelectedUser
}