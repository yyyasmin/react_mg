// frontend/src/helpers/ServerRoutes.js
// NODE
// console.log("IN ServerRoutes -- process.env.NODE_ENV: ", process.env.REACT_APP_NODE_ENV)
// export const baseUrl = process.env.REACT_APP_NODE_ENV === 'development'
//   ? 'http://localhost:5000'
//   : process.env.REACT_APP_BACKEND_URL || 
//   'https://node-server-landingpage-production.up.railway.app';

// console.log("IN ServerRoutes -- BaseURL : ", baseUrl)


// FLASK
console.log("IN ServerRoutes -- process.env.NODE_ENV: ", process.env.REACT_APP_NODE_ENV)
export const baseUrl = process.env.REACT_APP_NODE_ENV === 'development'
  ? 'http://127.0.0.1:5000' :
  'https://flaskreactmg-production.up.railway.app';

console.log("IN ServerRoutes -- BaseURL : ", baseUrl)