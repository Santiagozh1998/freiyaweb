<template>
  <b-navbar class="navbar" type="dark">
      <b-container>
            <router-link class="Logo" to="/signin">Freiya</router-link>

            <b-navbar-nav v-if="usuario" class="ml-auto">
              <b-nav-item @click="logout()">Salir</b-nav-item>
            </b-navbar-nav>
      </b-container>
  </b-navbar>
</template>

<script>
import firebase from 'firebase/app';

export default {
  data() {
    return {
      usuario: {}
    }
  },
  created() {
    this.usuario = firebase.auth().currentUser;
  },
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() => this.$router.push('signin'), (error) => console.error(error));
    }
  }

}
</script>

<style>
.navbar{
  background: #563d7c;
}

.Logo, .text-nav{
  padding: 5px;
  color: white;
  font-family: 'Roboto', sans-serif;
}

.Logo{
  font-size: 20px;
}

.Logo:hover{
  text-decoration: none;
  color: white;
}

.text-nav:hover{
  text-decoration: none;
  color: white;
}
</style>