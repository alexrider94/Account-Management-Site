import crypto from "crypto";
import dotenv from "dotenv";
import { logger } from "../log/logger.js";
dotenv.config();
const log = (msg) => logger.info(msg);

/**
* @param {String} pw hashed된 비밀번호
* @param {Function} callback
* @return {Obejct}
* @api public 단방향 - SHA512
*/
export const encryptPassword = async (pw) => {
  try {
    const SALT = crypto.randomBytes(16).toString('hex');
    const encrypted = crypto
      .pbkdf2Sync(pw, SALT, 100000, 64, "sha512")
      .toString("hex");

    const result = {
      password: encrypted,
      salt: SALT
    }
    return result;
  } catch (error) {
    log(`encryptPassword error occured`);
    throw error;
  }
}
