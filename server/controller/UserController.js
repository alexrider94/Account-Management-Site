import { mongoConnection, mongoDisconnection } from "../mongodb/nosql.js";
import { encryptPassword } from '../jwt/crypt.js';
import { logger } from '../log/logger.js';
import * as jwt from 'jsonwebtoken';

const log = (msg) => logger.info(msg);
export const register = async (req, res) => {
  try {
    //console.log(res.req.body);
    const responseData = res.req.body;
    const data = encryptPassword(responseData.password);
    //console.log(data);
    responseData.password = data.password;
    responseData["salt"] = data.salt;
    const conn = await mongoConnection();
    let user;
    try {
      user = await findUser(conn, responseData.email);
      if (user.length > 0) {
        if (conn) await mongoDisconnection(conn);
        return new Error("user exist");
      }
      else {
        await conn.collection("user").insertOne(responseData);
        if (conn) await mongoDisconnection(conn);
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
    const password = responseData.password.value;

    conn = await mongoConnection();

    const result = await conn.collection("user").find({
      email: email,
      password: password,
    }).toArray();

    log(`result : ${result}`);

    if (conn) await mongoDisconnection(conn);

    if (result.length === 0) {
      return res.json({ error: new Error(`user doesn't exist`).message });
    }
    else {
      return res.json({
        result: result,
      });
    }
  } catch (error) {
    log(`insertUser error occured ${error}`);
    throw error;
  }
};
