<template>
  <b-navbar class="navbar" type="dark">
      <b-container>
            <router-link class="Logo" to="/signin">Freiya</router-link>
            <!--
              <b-navbar-nav class="ml-auto">
                <router-link class="text-nav" to="/gallery">Galeria</router-link>
              </b-navbar-nav>
            -->
      </b-container>
  </b-navbar>
</template>

<script>
export default {

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