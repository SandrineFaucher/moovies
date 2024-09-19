<template>
  <div id="app" class="pt-5">
    <HeaderNav />

    <!--Si la route est racine du site -->
    <div v-if="$route.path == '/'">
      <!--j'affiche le titre de l'accueil et sa selection de film -->
      <h1 class="m-5">
        Vos films préférés sont sur Moovies !
      </h1>

      <!--Affichage des boutons de tri via le component SortButtons-->
        <SortButtons :movies="popularMovies"/>

      <!--en cas d'erreur de l'appel API-->
      <div v-if="error">
        <p class="bg-danger text-white p-5 fs-4"> Une erreur est survenue. 
          Merci de recharger la page ou de réessayer
          ultérieurement</p>
      </div>

      <!--si appel OK -->
      <div v-else>
        <!--MoviesList affiche les films grâce à une boucle v-for-->
        <!--v-bind : prop attendue = variable des datas (liste de films)-->
        <MovieList v-bind:movies="popularMovies" />
      </div>
    </div>

    <!--Si la route est différente j'affiche le templete du composant concerné-->
     <div v-else> 
      <RouterView :key="$route.fullPath"></RouterView>
     </div> 

    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from './components/template/HeaderNav';
import FooterApp from './components/template/FooterApp';
import MovieList from './components/utils/MovieList';
import SortButtons from './components/utils/SortButtons';

//import d'axios pour pouvoir faire les appels API
import axios from 'axios';

export default {
  name: 'App',
  components: {
    FooterApp, HeaderNav, MovieList, SortButtons,
  },
  data() { // les variables disponibles dans mon comosant
    return {   // la variable popularMovies va contenir les films reécupérés par l'appel API
      popularMovies: [],
      error: false // 
    }
  },
  created() {
    //code déclenché avant la génération du template par vue
    //c'est ici que je vais lancer mon appel API
    //adresse de l'api/ version/ mot clé          / clé API                               / options:francais + popularité décr. +page1
    axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr&sort_by=popularity.desc&page=1")
      // .then => quand l'appel API a réussi, renvoie un résultat
      // .then prend en paramètre une fonction fléchée anonyme . response = réponse de l'API
      .then(response => {
        //console.log(response.data.results)
        this.popularMovies = response.data.results //je stocke mes films récupérés dans la variable movies des datas
        console.log(this.popularMovies)
      })
      // Dans le cas ou l'appel API échoue 
      .catch(() => this.error = true)
  },
}
</script>

<style>
#app {
  background-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fbfcfd !important;
  margin-top: 150px;
}
h1{
  font-family: 'Big Shoulders Inline Text', cursive;
}
a {
  text-decoration: none !important;
  /* color: inherit !important */
}
</style>
