const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

const logger = require("../log/logger");
const log = (msg) => logger.info(msg);

/*
 * @parm
 *
 */

module.exports={
  encryptPassword :(pw) => {
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

}