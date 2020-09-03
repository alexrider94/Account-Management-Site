const logger = require("../../log/logger");
const log = (msg) => logger.info(msg);

module.exports = {
  Query: {
    insertUser: {
      User: async (inputData) => {
        let conn, result;
        try {
          conn = await nosql.mongoConnection();
          result = await conn.collection("user").insertOne(inputData);
        } catch (error) {
          console.log(`insertUser mongo insert occured ${error}`);
          throw error;
        } finally {
          if (conn) await nosql.mongoDisconnection(conn);
          return result;
        }
      },
    },
  },
};
