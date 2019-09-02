import Vue from 'vue'
import Router from 'vue-router'
import Signin from './views/Signin.vue'
import Gallery from './views/Gallery.vue'
import firebase from 'firebase';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        auth: true
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  var usuario = firebase.auth().currentUser;
  var autorizacion = to.matched.some(record => record.meta.auth);

  if(autorizacion && !usuario){

    next('signin');
  }
  else if(!autorizacion && usuario){

    next('gallery');
  }
  else {
    next();
  }
})


export default router;