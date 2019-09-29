<template>
    <div id="images-activities">
        <!-- Imagenes -->
        <b-container v-if="estado" class="container-images text-center justify-content-center">
            <div class="text-left">
                <b-button @click="closeImages()" variant="danger">X</b-button>
            </div>
            <h3>
                {{title}}
            </h3>
            <b-row v-if="images[index].length !== 0" >
                <b-col v-bind:key="img.resourceId" v-for="(img, i) in images[index]">
                    <img v-bind:src="urls[i]" width="180px">
                    <p>Estudiante: {{img.resourceNameStudent}}</p>
                </b-col>
            </b-row>
            <b-row v-if="images[index].length === 0" >
                <b-col>
                    <h4>Esta actividad no tiene imagenes disponibles</h4>
                    <img src="@/assets/nofound.jpg" width="300px">
                </b-col>
            </b-row>
        </b-container>

        <hr v-if="estado">

        <!-- Actividades -->
        <div class="container-activities">
            <h1 class="text-center">Actividades</h1>
            <b-row class="text-center justify-content-center">
                <b-col v-bind:key="`a-${index}`" class="activities" cols="10" lg="3" v-for="(a, index) in Activities">
                    <b-button href="#images-activities" variant="primary" class="button-activitie" v-on:click="showImages(index)">Ver imagenes</b-button>
                    <h4>
                        {{a.challengeName}}
                    </h4>
                    <p>Descripcion: <br>
                        {{a.challengeDescription}}                        
                    </p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
    data () {
        return {
            Activities: [],
            images: [],
            urls: [],
            title: "",
            index: 0,
            estado: false
        }
    },
    created() {
        var database = firebase
                .database()
                .ref('Activity/ActivityChallenge')
                .on('value', (snap) => {
                    snap.forEach((snapshot) => {
                        
                        this.Activities.push(snapshot.val());
                        var images = snapshot.val().Resources;                        
                        var temp = [];

                        for(var img in images){
                            temp.push(images[img]);
                        }

                        this.images.push(temp);
                    });
                });
    },
    methods: {
        showImages(index) {
            var storage = firebase.storage();
            this.estado = true;
            this.urls = [];
            this.title = this.Activities[index].challengeName;
            this.index = index;
            var images = this.images[index];
            
            for(var i = 0; i<images.length; i++){
                storage.ref(images[i].resourceId)
                    .getDownloadURL()
                    .then((url) => {
                        this.urls.push(url);
                    })
            }

        },
        closeImages() {
            this.estado = false;
            this.urls = [];
            this.title = "";
            this.index = 0;

        }
    }

}
</script>

<style>
.activities{
    border: 1px solid #ccc;
    padding: 5px;
    padding-top: 10px;
    border-radius: 5px;
    margin: 8px;
}

.container-activities{
    margin: 30px 10px 20px 10px;
}

.container-images{
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 30px;
}

.button-activitie{
    background: #563d7c;
    color: white;
    margin: 10px;
}

</style>