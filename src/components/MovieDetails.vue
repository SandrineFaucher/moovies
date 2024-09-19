<template>
    <h1 class="m-5">Détail du film</h1>
    <div class="container-fluid ">
        <div class="row">
            
            <div class="card col-md-4 ms-5 p-3 ">
                <img v-bind:src="urlDeBase + movieDetails.poster_path" class="card-img-top p-5" alt="immagefilm">
            </div>
           
            <div class="card-body col-md-4 mr-2 p-3 pb-5">
                <h3 class="card-title fs-1 m-5">{{ movieDetails.title }}</h3>
                <h6>Titre original : {{ movieDetails.original_title }}</h6>

                <!--Condition pour afficher la langue originale -->
                <p  v-if="movieDetails.original_language == 'en'">
                    Langue originale : Anglais</p>
                <p  v-else-if="movieDetails.original_language == 'fr'">
                    Langue originale : Français</p>

                <p class="fs-3 m-5"><strong>{{ movieDetails.tagline }}</strong></p>
                <div class="col-md-6 mx-auto">
                <p class="card-text fs-5 text-start m-4">{{ movieDetails.overview }}</p>
                </div>
                <p>Note moyenne : {{ Math.ceil(movieDetails.vote_average) }}</p>
                <p>Date de sortie : {{ formatDate(movieDetails.release_date) }}</p>
                <p>Genres :
                    <span v-for="genre in movieDetails.genres" :key="genre.id" class="badge bg-secondary m-3 fs-5">{{ genre.name
                    }}</span>
                </p>
                <div class="mt-5" id="trailer" v-if="video[0]">
                    <iframe width="650" height="300" v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen class="shadow">
                    </iframe>
                </div>


            </div>

        </div>

    </div>
</template>

<script>
// import de l'extention moment pour gérer les formats de dates
import moment from 'moment'
moment.locale('fr');

//import d'axios pour pouvoir faire les appels API
import axios from 'axios';

export default {
    name: "MovieDetails",

    methods: {
        formatDate(value) {
            return moment(value).format('Do MMMM YYYY');
        },
    },

    data() { // les variables disponibles dans mon composant
        return {   // la variable MovieDetails va contenir les films reécupérés par l'appel API
            movieDetails: [],
            movieId: this.$route.params.id,
            error: false, //
            urlDeBase: "https://image.tmdb.org/t/p/original/",
            video: [],
        }


    },

    created() {
        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon appel API
        //adresse de l'api/ version/ mot clé          / clé API                               / options:francais + popularité décr. +page1
        axios.get("https://api.themoviedb.org/3/movie/" + this.movieId + "?api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr")

            // .then => quand l'appel API a réussi, renvoie un résultat
            // .then prend en paramètre une fonction fléchée anonyme . response = réponse de l'API
            .then(response => {
                //console.log(response.data.results)
                this.movieDetails = response.data//je stocke mes films récupérés dans la variable movies des datas
                console.log(this.movieDetails)
                axios
                    .get(
                        "https://api.themoviedb.org/3/movie/" + this.movieId +
                        "/videos?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr"
                    )
                    .then((response) => {
                        this.video = response.data.results;
                        console.log(this.video);
                    });

            })
            // Dans le cas ou l'appel API échoue 
            .catch(() => this.error = true)
    }

}

</script>