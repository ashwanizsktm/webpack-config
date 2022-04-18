// console.log(process.env.NODE_ENV)
// import {testEnv } from './webpack.test';

// console.log("test environment", testEnv);

// switch (process.env.NODE_ENV) {
//     case 'prod':
//     case 'production':
//       module.exports = require('./webpack.prod')({env: 'production'});
//       console.log(process.env.NODE_ENV, "production")
//       break;
//     case 'test':
//     case 'testing':
//       module.exports = require('./webpack.test')({env: 'test'});
//       console.log(process.env.NODE_ENV, "testing")
//       break;
//     case 'dev':
//     case 'development':
//     default:
//       module.exports = require('./webpack.dev')({env: 'development'});
//       console.log(process.env.NODE_ENV, "development");


//   }

module.exports = () => {

    const env = process.env.NODE_ENV;
    console.log("the environment", env);

    switch (env) {
      case "local":
        return local
      case "cypress":
        return cypress
      case "development":
        return development
      default:
        return production
    }
   }
  


 