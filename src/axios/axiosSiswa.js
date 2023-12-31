/* eslint-disable */
// Api.js
import axios from "axios";
// https://dev.to/lukocastillo/svelte-3-how-to-connect-your-app-with-a-rest-api-axios-2h4e
const BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : "http://localhost:8002/";
// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL: `${BASE_URL}api/`, // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, request) => {
  // console.log(localStorage.getItem('token'));
  const headers = {
    authorization: `Bearer ${localStorage.getItem("siswa_token")}`,
  };
  // using the axios instance to perform the request that received from each http method
  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err));
};
const apiRequestDown = (method, url, request) => {
  console.log(localStorage.getItem("siswa_token"));
  console.log("====================================");
  console.log("tes");
  console.log("====================================");
  const headers = {
    authorization: `Bearer ${localStorage.getItem("siswa_token")}`,
  };
  // using the axios instance to perform the request that received from each http method
  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err));
};

// function to execute the http get request
const get = (url, request) => apiRequest("get", url, request);

// function to execute the http delete request
const deleteRequest = (url, request) => apiRequest("delete", url, request);

// function to execute the http post request
const post = (url, request) => apiRequestDown("post", url, request);
const postDown = (url, request) => apiRequestDown("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url, request) => apiRequest("patch", url, request);

// expose your method to other services or actions
const API = {
  get,
  delete: deleteRequest,
  post,
  postDown,
  put,
  patch,
};
export default API;
