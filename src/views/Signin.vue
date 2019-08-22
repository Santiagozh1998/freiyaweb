<template>
    <div>
        <Nav />
        <b-container class="container-login">
            <h3>Inicia sesión para entrar a la galería multimedia de Freiya</h3>
            <b-row class="justify-content-center">
                <b-col lg="3">
                    <div class="container-social">
                        <p>Iniciar sesión con Google</p>
                        <button v-on:click="loginGoogle()" class="button-social google">
                            <img src="@/assets/Logo.png" width="100px">
                        </button>
                    </div>                    
                </b-col>
                <b-col lg="3">
                    <div class="container-social">
                        <p>Inicia sesión con Facebook</p>
                        <button v-on:click="loginFacebook()" class="button-social"> 
                            <img src="@/assets/facebook.png" width="100px">
                        </button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Nav from '@/components/Navbar.vue';
import firebase from 'firebase';

export default {
    name: 'Signin',
    components: {
        Nav
    },
    methods: {
        loginGoogle() {   
            console.log("Login con Google");
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase    
                .auth()
                .signInWithPopup(provider)
                .then((user)=> this.$router.replace('gallery'), (error)=> console.error(error))
        },
        loginFacebook() {
            console.log("Login con Facebook");
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then((user)=> this.$router.replace('gallery'), (error)=> console.error(error))
        }
    }
}
</script>

<style>
.button-social{
    padding: 0px;
    background: white;
    border: 3px solid #ccc;
} 

.button-social:active{
    background: white;
    border: 3px solid #aaa;
} 

.google{
    border-radius: 100%;
}

.google:active{
    border-radius: 100%;
}

.container-login{
    text-align: center;
    margin-top: 40px;
}

.container-social{
    margin-top: 20px;
}
</style>