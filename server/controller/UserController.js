
const nosql = require("../mongodb/nosql");
const cryption = require("../jwt/crypt");

const logger = require("../log/logger");
const log = (msg) => logger.info(msg);

register = async (req, res) => {
  try {
    //console.log(res.req.body);
    const responseData = res.req.body;
    const data = cryption.encryptPassword(responseData.password);
    //console.log(data);
    responseData.password = data.password;
    responseData["salt"] = data.salt;
    const conn = await nosql.mongoConnection();
    let user;
    try {
      user = await findUser(conn,responseData.email);
      if(user.length>0){
        if (conn) await nosql.mongoDisconnection(conn);
        return new Error("user exist");
      }
      else {
        await conn.collection("user").insertOne(responseData);
        if (conn) await nosql.mongoDisconnection(conn);
        return;
      }
    } catch (error) {
      log(`register mongo insert occured ${error}`);
      throw error;
    }
  } catch (error) {
    log(`register connection error occured ${error}`);
    throw error;
  }
};

findUser = async (conn, email) => {
  try {
    const result = await conn.collection("user").find({"email":email}).toArray();
    return result;
  } catch (error) {
    log(`find User error is ${error}`);
    throw error;
  }
};

login = async (req, res) => {
  let result, conn;
  try {
    const responseData = req.body;
    const email = responseData.email;
    const password = responseData.password;

    conn = await nosql.mongoConnection();

    result = await conn
      .collection("user")
      .find({
        email: email,
        password: password,
      })
      .toArray();

    if (conn) await nosql.mongoDisconnection(conn);

    console.log(result);

    return res.json({
      result: result,
    });
  } catch (error) {
    log(`insertUser error occured ${error}`);
    throw error;
  }
};

module.exports = {
  register,
  login,
};
