<template>
    <div class="container-fluid mb-4">
        <button type="button" class="btn btn-light m-3" @click="sortByTitle">
            Trier par titre
        </button>
        <button type="button" class="btn btn-light m-3" @click="sortByDate">
            Trier par date
        </button>
        <button type="button" class="btn btn-light m-3" @click="sortByAverage">
            Trier par note
        </button>
    </div>
</template>

<script>

export default {
    name: "SortButtons",

    // Liste de films à afficher, fournie par le parent
    props: ['movies'], // films à trier venant du parent 

    data() {
        return { // indicateurs pour savoir si le tri ont été effectés
            sortedByTitle: false,
            sortedByDate: false,
            sortedByAverage: false
        }
    },

    methods: { // je déclare mes trois fonctions de tri 

        sortByTitle() { // tri par titre 
            // je crée une copie  de ma liste de films (impossible de modifier directement une prop)
            let sortMovies = this.movies;

            //je vérifie si le tri a déjà été effectué
            //si le tri n'a pas été effecté => tri normal, par ordre alphabétique
            if (this.sortedByTitle == false) {


                // je tri mes titres par films
                sortMovies.sort(function (a, b) {

                    //VERSION TERNAIRE OPTIMISEE
                    if (a.title.normalize('NFD') < b.title.normalize('NFD')) return -1;
                    return a.title.normalize('NFD') > b.title.normalize('NFD') ? 1 : 0;



                    // if (a.title.normalize('NFD') > b.title.normalize('NFD')) { // si le titre du film a vient avant le film b
                    //     return 1;            // a et placé avant b
                    // }
                    // if (a.title.normalize('NFD') < b.title.normalize('NFD')) { // si c'est l'inverse 
                    //     return -1;           // a est placé après b
                    // }
                    // return 0;                // sinon (titre égaux) => pas de changement 
                })
                //this.sortedByTitle = true

                // si le tri a déjà été effectué 
            } else {
                // je tri mes films par titre dans l'ordre alphabétique inversé => tri INVERSE
                sortMovies.sort(function (a, b) {

                    //VERSION TERNAIRE OPTIMISEE    
                    if (a.title.normalize('NFD') > b.title.normalize('NFD')) return -1;
                    return a.title.normalize('NFD') < b.title.normalize('NFD') ? 1 : 0;

                    //     if (a.title.normalize('NFD') < b.title.normalize('NFD')) { // // si le titre du film b vient avant le film b
                    //         return 1;            // a est placé après b
                    //     }
                    //     if (a.title.normalize('NFD') > b.title.normalize('NFD')) { // si le titre du film a vient avant le film b 
                    //         return -1;           // a et placé avant b
                    //     }
                    //     return 0;                // sinon (titre égaux) => pas de changement 
                    // })
                })

                //this.sortedByTitle = false

                //OPTIMISATION DU CODE EN UNE SEULE LIGNE POUR VERIFIER LE BOOLEEN DE LA VARIABLE DE TRI

            }
            this.sortedByTitle = !this.sortedByTitle

        },

        sortByDate() {
            // je crée une copie  de ma liste de films (impossible de modifier directement une prop)
            let sortMovies = this.movies;

            //je vérifie si le tri a déjà été effectué
            //si le tri n'a pas été effecté => tri normal, par ordre de date
            if (this.sortedByDate == false) {


                // je tri mes dates de  films
                sortMovies.sort(function (a, b) {

                    //VERSION TERNAIRE OPTIMISEE
                    if (a.release_date > b.release_date) return -1;
                    return a.release_date < b.release_date ? 1 : 0;

                })

                // si le tri a déjà été effectué 
            } else {
                // je tri mes films par dates  => tri INVERSE
                sortMovies.sort(function (a, b) {

                    //VERSION TERNAIRE OPTIMISEE    
                    if (a.release_date < b.release_date) return -1;
                    return a.release_date > b.release_date ? 1 : 0;

                })
            }

            //OPTIMISATION DU CODE EN UNE SEULE LIGNE POUR VERIFIER LE BOOLEEN DE LA VARIABLE DE TRI
            this.sortedByDate = !this.sortedByDate

        },

        sortByAverage() { // tri par note
            // je crée une copie  de ma liste de films (impossible de modifier directement une prop)
            let sortMovies = this.movies;

            //je vérifie si le tri a déjà été effectué
            //si le tri n'a pas été effecté => tri normal, par ordre de note
            if (this.sortedByAverage == false) {


                // je tri mes dates de  films
                sortMovies.sort(function (a, b) {

                    //VERSION TERNAIRE OPTIMISEE
                    if (a.vote_average > b.vote_average) return -1;
                    return a.vote_average < b.vote_average ? 1 : 0;

                })

                // si le tri a déjà été effectué 
            } else {
                // je tri mes films par dates  => tri INVERSE
                sortMovies.sort(function (a, b) {

                    //VERSION TERNAIRE OPTIMISEE    
                    if (a.vote_average < b.vote_average) return -1;
                    return a.vote_average> b.vote_average ? 1 : 0;

                })
            }

            //OPTIMISATION DU CODE EN UNE SEULE LIGNE POUR VERIFIER LE BOOLEEN DE LA VARIABLE DE TRI
            this.sortedByAverage = !this.sortedByAverage
        }
    }
}
</script>