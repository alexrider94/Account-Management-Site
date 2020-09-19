const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

const logger = require("./log/logger");
const log = (msg) => logger.info(msg);

const KEY = process.env.KEY;

/*
 * @parm
 *
 */

export function encryptPassword(password) {
  try {
    const SALT = crypto.randomBytes(16);
    const encrypted = crypto
      .pbkdf2(KEY, SALT, 100000, 64, "sha512")
      .toString("hex");
    return { encrypted, SALT };
  } catch (error) {
    log(`encryptPassword error occured`);
    throw error;
  }
}
