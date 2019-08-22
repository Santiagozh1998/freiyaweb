<template>
  <div>
        <Nav />  
        <b-button v-on:click="logout()">Salir</b-button>
        <Activities />
  </div>
</template>

<script>
import Nav from '@/components/Navbar.vue';
import firebase from 'firebase';    
import Activities from '@/components/Activities.vue'

export default {
    name: 'Gallery',
    components: {
        Nav,
        Activities
    },
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => this.$router.replace('signin'), (error) => console.error(error));
        }
    }
}
</script>

<style>

</style>