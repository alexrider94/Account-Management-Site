const winston = require("winston");
const appRoot = require("app-root-path");

const { combine, timestamp, label, printf } = winston.format;

/* 
    로그 출력 포맷 정의 함수
*/
const myFormatLog = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const options = {
  // log파일
  file: {
    level: "info",
    filename: `${appRoot}/logs/winston-test.log`, // 로그파일을 남길 경로
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: combine(
      label({ label: "winston-test" }),
      timestamp(),
      myFormatLog // log 출력 포맷
    ),
  },
  // 개발 시 console에 출력
  console: {
    level: "debug",
    handleExceptions: true,
    json: false, // 로그형태를 json으로도 뽑을 수 있다.
    colorize: true,
    format: combine(label({ label: "nba_express" }), timestamp(), myFormatLog),
  },
};

let logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.file), // 중요! 위에서 선언한 option으로 로그 파일 관리 모듈 transport
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

module.exports = logger;
