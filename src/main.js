import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app';


var firebaseConfig = {
  apiKey: " AIzaSyATlj5wazv5HxkwcnLf7zQhe7Qe6KNCfqg ",
  authDomain: "freiyaproject-65b0b.firebaseapp.com",
  databaseURL: "https://freiyaproject-65b0b.firebaseio.com",
  storageBucket: "freiyaproject-65b0b.appspot.com"
};

firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user)=>{

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

});
