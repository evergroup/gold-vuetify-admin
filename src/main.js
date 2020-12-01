import 'normalize.css/normalize.css';
import 'vuetify/dist/vuetify.min.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from 'vue';
import vuetify from './plugins/vuetify';
import i18n from './locale'; // Internationalization

import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';



// http
import axios from 'axios';
Vue.prototype.$http = axios;
axios.defaults.baseURL = process.env.API_BASE_URL || 'http://localhost:8848/api/';
console.log(process.env);

axios.interceptors.request.use(
  (config) => {
    store.commit('setLoading', true);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.common['X-Access-Token'] = token;
    }
    return config;
  },
  (error) => {
    store.commit('setLoading', false);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    store.commit('setLoading', false);
    let { data } = response;
    if (data.status == 401 || response.statusCode == 401) {
      // router.replace({
      //   path: '/signin',
      //   query: { redirect: router.currentRoute.fullPath },
      // });
    }
    return data;
  },
  (error) => {
    store.commit('setLoading', false);
    return Promise.reject(error);
  }
);

//api
import api from '@/api';
window.api = api

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
