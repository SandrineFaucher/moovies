<template>
    <h1 class="m-5">Films Français</h1>
    <MovieList v-bind:movies="frenchMovies" />
</template>

<script>
import MovieList from './utils/MovieList'

//import d'axios pour pouvoir faire les appels API
import axios from 'axios';

export default {
    name: "FrenchMovies",
    components: {
        MovieList
    },

    data() { // les variables disponibles dans mon composant
        return {   // la variable AmericanMovies va contenir les films reécupérés par l'appel API
            frenchMovies: [],
            error: false // 
        }

    },

    created() {
        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon appel API
        //adresse de l'api/ version/ mot clé          / clé API                               / options:francais + popularité décr. +page1
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr&with_original_language=fr&include_adult=false&vote_count.gte=1000&sort_buy_primary_release_date.desc&page=1")

            // .then => quand l'appel API a réussi, renvoie un résultat
            // .then prend en paramètre une fonction fléchée anonyme . response = réponse de l'API
            .then(response => {
                //console.log(response.data.results)
                this.frenchMovies = response.data.results //je stocke mes films récupérés dans la variable movies des datas
                console.log(this.frenchMovies)
            })
            // Dans le cas ou l'appel API échoue 
            .catch(() => this.error = true)
    }
}
</script>