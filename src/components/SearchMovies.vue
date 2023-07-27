<template>
    <h1 class="m-5">Rechercher un film</h1>

    <input class="form-control m-5 w-50 mx-auto" v-model="query" @keyup="searchMovies()">
    <MovieList :movies="movies" />

</template>

<script>
import MovieList from './utils/MovieList.vue';

//import d'axios pour pouvoir faire les appels API
import axios from 'axios';



export default {
    name: "SearchMovies",

    components: {
        MovieList
    },

    data() {
        return {
            query: "",
            movies: [],
            error: false
        }
    },
    methods: {
        searchMovies() {
            axios.get("https://api.themoviedb.org/3/search/movie?query=" + this.query + "&api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr&include_adult=false")
                .then(response => {
                    this.movies = response.data.results
                    console.log(this.movies);
                })
                // Dans le cas ou l'appel API échoue 
                .catch(() => this.error = true)
        }
    }

}
</script>