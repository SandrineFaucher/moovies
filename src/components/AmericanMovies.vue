<template>
    <h1>Films Américains </h1>
    <MovieList v-bind:movies="americanMovies" />
   
</template>

<script>
import MovieList from './utils/MovieList'

//import d'axios pour pouvoir faire les appels API
import axios from 'axios';

export default{
    name : "AmericanMovies",
    components :{
        MovieList
    },


data() { // les variables disponibles dans mon composant
    return {   // la variable AmericanMovies va contenir les films reécupérés par l'appel API
      americanMovies: [],
      error: false // 
    }

  },

  created() {
    //code déclenché avant la génération du template par vue
    //c'est ici que je vais lancer mon appel API
    //adresse de l'api/ version/ mot clé          / clé API                               / options:francais + popularité décr. +page1
    axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr&certification_country=us&sort_buy_primary_release_date.desc&page=1")
      // .then => quand l'appel API a réussi, renvoie un résultat
      // .then prend en paramètre une fonction fléchée anonyme . response = réponse de l'API
      .then(response => {
        //console.log(response.data.results)
        this.americanMovies = response.data.results //je stocke mes films récupérés dans la variable movies des datas
        console.log(this.americanMovies)
      })
      // Dans le cas ou l'appel API échoue 
      .catch(() => this.error = true)
  }
}

</script>