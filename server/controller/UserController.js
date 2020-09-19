const { response } = require("express");
const nosql = require("../mongodb/nosql");
const encrypt = require("../jwt/crypt");

register = async (req, res) => {
  try {
    console.log(res.req.body);
    const responseData = res.req.body;
    const password = responseData.password;
    const conn = await nosql.mongoConnection();

    try {
      await conn.collection("user").insertOne(responseData);
      if (conn) await nosql.mongoDisconnection(conn);
      return;
    } catch (error) {
      console.log(`register mongo insert occured ${error}`);
      throw error;
    }
  } catch (error) {
    console.log(`register connection error occured ${error}`);
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
    console.log(`insertUser error occured ${error}`);
    throw error;
  }
};

module.exports = {
  register,
  login,
};
