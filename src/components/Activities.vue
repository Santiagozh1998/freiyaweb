<template>
    <div>
        <h3>Hola mundo</h3>
        <button v-on:click="getInfo()">Obtener</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data () {
        return {
            Activities: [],
            imageUrl: ""
        }
    },
    methods: {
        getInfo() {
            var database = firebase
                            .database()
                            .ref('Activity/ActivityChallenge')
                            .once('value')
                            .then((snapshot) => {
                                snapshot.forEach((snap) => {
                                    console.log(snap.val().Resources);
                                });
                            });

            //this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/freiyaproject-65b0b.appspot.com/o/-Lm1RN495aAeiMP5ugzC?alt=media&token=203b265f-f717-4a4f-af5a-d45d8660279a"
        }
    }

}
</script>

<style>

</style>