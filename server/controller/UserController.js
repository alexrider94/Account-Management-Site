const nosql = require('../nosql/nosql');

insertUser = async (req, res) => {
    try {
        //console.log(res.req.body);
        const responseData = res.req.body;
        console.log(responseData);
        const conn = await nosql.mongoConnection();

        try {
            await conn.collection('user').insertOne(responseData);

            console.log(`user inserted in user collection ${JSON.stringify(responseData)}`);

        } catch (error) {
            console.log(`insertUser mongo insert occured ${error}`);
            throw error;
        } finally {
            if (conn) await nosql.mongoDisconnection(conn);
            return;
        }
    } catch (error) {
        console.log(`insertUser connection error occured ${error}`);
        throw error;
    }

}

getUser = async (req, res) => {
    try {
        console.log("getUser request");
        const conn = await nosql.mongoConnection();
    } catch (error) {
        console.log(`insertUser error occured ${error}`);
        throw error;
    }
}

module.exports = {
    insertUser,
    getUser
}