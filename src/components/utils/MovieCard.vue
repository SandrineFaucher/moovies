<template>
    <h3 v-if="$route.path == '/Top50Movies'" class="m-3">
        <span v-once>#{{ index + 1 }}</span>
    </h3>
    <!-- lien qui rend la card clicable en transmettant son id en syntaxe "interoplation"-->
    <router-link class="link" v-bind:to="`/MovieDetails/${movie.id}`">
        <div class="card">
            <img v-bind:src="urlDeBase + movie.poster_path" class="card-img-top" alt="immagefilm">
            <div class="card-body">

                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text text-start">{{ movie.overview.substring(0, 200) + "..." }}</p>
                <p>Note moyenne : {{ Math.ceil(movie.vote_average) }}</p>
                <p>Date de sortie :{{ formatDate(movie.release_date) }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
// import de momemt pour gérer la date 
import moment from 'moment'
moment.locale('fr');

export default {
    name: "MovieCard",

    methods: {
        formatDate(value) {
            return moment(value).format('Do MMMM YYYY');
        }
    },

    data() {
        return {
            //url de bas des images de TMDB
            urlDeBase: "https://image.tmdb.org/t/p/original/",
        }
    },

    props: ['movie', 'index']
}
</script>