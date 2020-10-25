# Study Group

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- This project made for React Study
- Project with REST API method

## Backend-Server

    Node - nodemon
    Express
    MongDB - moongose
    Security - crypto, jsonwebtoken
    Log - winston

## Frontend-Client

    React - Redux, React-router-dom
    UI - React-material-ui/cores & icons

### Quick Start

    npm install
    npm run dev


### Directory

    REACT-MANAGEMENT-TUTORIAL
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── logs
    │   └── winston-test.log
    ├── client   
    │   ├── node_modules          
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   └── manifest.json
    │   └── src
    │       ├── actions
    │       ├── api
    │       ├── components
    │       ├── containers
    │       ├── reducers
    │       ├── store
    │       ├── utils
    │       ├── index.js
    │       └── serviceWorker.js
    └── server
        ├── controller
        │   └── userController.js
        ├── graphql
        │   └── nosql.js
        ├── jwt
        │   ├── login.js
        │   └── crypt.js
        ├── log
        │   └── logger.js
        ├── mongodb
        │   └── nosql.js
        ├── router.js
        ├── server.js
        └── .env