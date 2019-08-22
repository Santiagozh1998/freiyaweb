<template>
    <div class="container-activities">
        <h1 class="text-center">Actividades</h1>
        <b-row class="text-center justify-content-center">
            <b-col v-bind:key="a.joinCode" class="activities" cols="4" lg="3" v-for="a in Activities">
                <h4>
                    {{a.challengeName}}</h4>
                <p>Imagen a futuro</p>
                <p>Descripcion:</p>
                <p>
                    {{a.challengeDescription}}</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import firebase from 'firebase/app';



export default {
    data () {
        return {
            Activities: [],
        }
    },
    created() {
        var database = firebase
                .database()
                .ref('Activity/ActivityChallenge')
                .once('value', (snap) => {
                    snap.forEach((snapshot) => {
                        this.Activities.push(snapshot.val())
                    });
                });
                //this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/freiyaproject-65b0b.appspot.com/o/-Lm1RN495aAeiMP5ugzC?alt=media&token=203b265f-f717-4a4f-af5a-d45d8660279a"
    }

}
</script>

<style>
.activities{
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
    margin: 8px;
}

.container-activities{
    margin: 30px 10px 20px 10px;
}
</style>