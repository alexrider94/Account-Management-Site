import crypto from "crypto";
import dotenv from "dotenv";
import { logger } from "../log/logger.js";
dotenv.config();
const log = (msg) => logger.info(msg);

/**
* @param {Number} byteSize 기본값 16
* @param {Function} callback
* @return {String}
* @api public 솔트생성
*/

export const makeSalt = async (byteSize) => {
  const defaultByteSize = 16;

  if (byteSize < 1) {
    byteSize = defaultByteSize;
  }

  return crypto.randomBytes(byteSize).toString('hex');
}

/**
* @param {String} pw hashed된 비밀번호
* @param {String} salt salt값
* @param {Function} callback
* @return {Obejct}
* @api public 단방향 - SHA512
*/
export const encryptPassword = async (pw, salt) => {
  try {
    const encrypted = crypto
      .pbkdf2Sync(pw, salt, 100000, 64, "sha512")
      .toString("hex");

    const result = {
      password: encrypted,
      salt: salt
    }
    return result;
  } catch (error) {
    log(`encryptPassword error occured`);
    throw error;
  }
}
