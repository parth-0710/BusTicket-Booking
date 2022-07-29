//Axios: Axios is a Javascript library used to make HTTP requests
// from node. js or XMLHttpRequests from the browser and it supports the Promise API
// that is native to JS ES6. It can be used intercept HTTP requests and responses and 
//enables client-side protection against XSRF.

import axios from 'axios'
export default axios.create({
    baseURL: 'http//localhost:8080'
})
