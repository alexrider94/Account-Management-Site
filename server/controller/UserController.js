const nosql = require('../nosql/nosql');

insertUser = async (req, res) => {
    try {
        console.log(res);
        // const conn = await nosql.mongoConnection();
        // conn.Collection('user').insert({})
    } catch (error) {
        console.log(`insertUser error occured ${error}`);
        throw error;
    }

}

getUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(`insertUser error occured ${error}`);
        throw error;
    }
}


module.exports = {
    insertUser,
    getUser
}