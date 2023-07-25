<template>
    <div class="card">
        <img v-bind:src="urlDeBase + movie.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview.substring(0, 200) + "..." }}</p>
            <p>Note moyenne : {{ movie.vote_average }}</p>
            <p>Date de sortie :{{ movie.release_date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieCard",

    data() {
        return {
            //url de bas des images de TMDB
            urlDeBase: "https://image.tmdb.org/t/p/original/",
        }
    },

    props : ['movie']
}
</script>