<template>
    <h1 class="m-5">Les meilleurs films</h1>
    <SortButtons :movies="top50Movies"/>

    <MovieList v-bind:movies="top50Movies" />

</template>

<script>
import MovieList from './utils/MovieList'
import SortButtons from './utils/SortButtons';

//import d'axios pour pouvoir faire les appels API
import axios from 'axios';

export default {
    name: "Top50Movies",
    components: {
        MovieList, SortButtons,
    },

    data() { // les variables disponibles dans mon composant
        return {   // la variable top50Movies va contenir les films reécupérés par les appels API
            top50Movies: [],

            //error: false // 
        }

    },

    created() {
        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon appel API
        //adresse de l'api/ version/ mot clé          / clé API                               / options:francais + popularité décr. +page1
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=1")
            .then(response => {
                //je stocke mes films récupérés dans la variable movies des datas    
                this.top50Movies = response.data.results

                // je relance un appel pour la deuxième page 
                axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=2")
                    .then(response => {
                        this.top50Movies = this.top50Movies.concat(response.data.results)
                        //console.log(this.top50Movies);

                        //je relance un appel pour la troisième page
                        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=2ee39f0fde7b77c58f1f3b6aaf0568f0&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=3")
                            .then(response => {
                                this.top50Movies = this.top50Movies.concat(response.data.results),
                                this.top50Movies = this.top50Movies.slice(0, 50)
                                })
                                // Dans le cas ou l'appel API échoue 
                                .catch(() => this.error = true)
                                                                    
                                })
                            })

                    }
            }

 </script>