require('./bootstrap');

import Vue from 'vue'
import router from './router'

import axios from 'axios'
import store from './store'

import App from './App.vue'

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://backend.mundiatech.com/api/";
// axios.defaults.headers.post['Content-Type'] = 'application/json;'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://127.0.0.1:8000/';

axios.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('accessToken');
    config.headers.Authorization =  accessToken;

    return config;
});

axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   store.dispatch("auth/logout");
    //   return router.push("/login");
    // }
  }
});




const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
