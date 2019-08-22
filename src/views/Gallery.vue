<template>
  <div>
        <Nav />  
        <Activities />
  </div>
</template>

<script>
import Nav from '@/components/Navbar.vue';
import firebase from 'firebase/app';   
import Activities from '@/components/Activities.vue'

export default {
    name: 'Gallery',
    components: {
        Nav,
        Activities
    }
}
</script>

<style>

</style>