const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
const router = require("./router");
const cors = require("cors");
const compression = require("compression");
const logger = require("./log/logger");
const log = (msg) => logger.info(msg);
const schema = require("./graphql/schema");
const port = process.env.PORT || 5557;

const server = new ApolloServer({
  schema,
});

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

server.applyMiddleware({ app, path: "/graphql" });

//api 경로 router 설정
// app.use('/api', router);
app.use("/api", router);

//Error Handling 404
//에러핸들러가 router위에있으면 다 404처리됨.
app.use(function (reqest, response, next) {
  console.warn("404 Page Not Found", reqest.url);
  response.sendStatus(404);
  return;
});

app.listen(port, () => {
  log(`Listening on port http://localhost:${port}`);
  log(`GrahpQL Test API at http://localhost:${port}/graphql`);
});
