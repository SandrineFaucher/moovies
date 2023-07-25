<template>
    <div class="container-fluid ">
        <div class="row">
            <!-----------------card bootsrap : affichage du film----------------------------->
            <!------------------------------------------------------------------------------->

            <!--boucle v-for qui va parcourir les films à afficher-->
            <!--v-bind:key="movie.id" : identiifant de chaque film-->
            <!--v-bind permet d'injecter une variable en tant que valeur d'un attribut-->
            <div v-for="movie in movies" v-bind:key="movie.id" class="col-sm-6 col-md-4 col-lg-3">
                <!-- v-bind : prop attendue = valeur (mon alias v-for)-->
                <MovieCard v-bind:movie = "movie"/>
                
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
    name: "MovieList",
    components :{
        MovieCard
    },
    
    // Liste de films à afficher, fournie par le parent
    props: ['movies']
}
</script>