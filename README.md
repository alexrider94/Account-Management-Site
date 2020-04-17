### Management System
This project for react study

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### REACT STUDY
Redux - action, dispatch
Router - Link, BrowserRoute 

### ETC
## DATA를 상위 PARENT로 전송방법
-Router로 연결된 경우 전송 불가
## RESTFUL API - axios , fetch
# fecth 
- import를 하지않고 사용할 수 있다.
- response timeout 제공 x
- promise base
# axios
- fecth에서 사용하지 않는 기능 제공
## async, await


## CORS 문제
- CORS란 Cross Origin Resource Sharing의 약자로 브라우저의 현재 웹페이지가 이 페이지를 받은 서버가 아닌 다른 서버의 자원을 호출하는 것을 의미합니다
- client의 port 3000과 server의 port 5000이 다르기때문에 보안상 허용되지 않는 문제.
# 해결방법 
-npm install cors
-server.js내부에 app.use(require('cors')()); 포함
