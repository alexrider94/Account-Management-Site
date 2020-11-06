import { mongoConnection, mongoDisconnection } from "../mongodb/nosql.js";
import { encryptPassword } from '../jwt/crypt.js';
import { logger } from '../log/logger.js';
import jwt from 'jsonwebtoken';
import { makeSalt } from '../jwt/crypt.js';
const APP_SECRET = "jWt_(An@d-rAnDO_meS!alt";
const log = (msg) => logger.info(msg);
export const register = async (req, res) => {
  try {
    console.log(`response body info is : ${JSON.stringify(res.req.body)}`);
    const responseData = res.req.body;
    const salt = await makeSalt(16);
    const data = await encryptPassword(responseData.password, salt);

    console.log(`encryptPassword info is : ${JSON.stringify(data)}`);
    responseData.password = data.password;
    responseData["salt"] = data.salt;
    const conn = await mongoConnection();
    let user;
    try {
      user = await findUser(conn, responseData.email);
      if (user.length > 0) {
        if (conn) await mongoDisconnection(conn);
        return res.json({ error: new Error(`user exist`).message });
      }
      else {
        await conn.collection("user").insertOne(responseData);
        if (conn) await mongoDisconnection(conn);
        return res.json({ message: "success" });
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

export const findUser = async (conn, email) => {
  try {
    const result = await conn.collection("user").find({ "email": email }).toArray();
    return result;
  } catch (error) {
    log(`find User error is ${error}`);
    throw error;
  }
};

export const login = async (req, res) => {
  let conn;
  try {
    console.log(req.body);
    const responseData = req.body;
    const email = responseData.email.value;

    conn = await mongoConnection();

    const result = await conn.collection("user").find({
      email: email
    }).toArray();

    log(`result : ${JSON.stringify(result)}`);

    const data = await encryptPassword(responseData.password.value, result[0].salt);


    if (conn) await mongoDisconnection(conn);

    if (result.length === 0) {
      return res.json({ error: new Error(`user doesn't exist`).message });
    }
    else {
      if (data.password === result[0].password) {
        const token = jwt.sign({
          userInfo: result[0]
        }, APP_SECRET);

        return res.json({
          result: token,
        });
      }
      else {
        return res.json({ error: new Error(`wrong password`).message });
      }
    }
  } catch (error) {
    log(`insertUser error occured ${error}`);
    throw error;
  }
};
