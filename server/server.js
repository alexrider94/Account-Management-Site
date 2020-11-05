import cors from "cors";
import compression from "compression";
import { logger } from "./log/logger.js";
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { router } from './router.js';
const log = (msg) => logger.info(msg);
const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(compression());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//api 경로 router 설정
app.use("/api", router);

//Error Handling 404
//에러핸들러가 router위에있으면 다 404처리됨.
app.use(function (reqest, response, next) {
  console.warn("404 Page Not Found", reqest.url);
  response.sendStatus(404);
  return;
});

app.listen(port, () => {
  log(`express server start on port http://localhost:${port}`);
});
