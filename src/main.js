import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import config from './config';

firebase.initializeApp(config);
Vue.use(BootstrapVue);
Vue.config.productionTip = true;

firebase.auth().onAuthStateChanged((user)=>{

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

});
