import { createWebHistory, createRouter } from "vue-router";

// on importe les composants 
import App from "./App"
import AmericanMovies from "./components/AmericanMovies";
import FrenchMovies from "./components/FrenchMovies";
import LastMovies from "./components/LastMovies";
import MoviesDetails from "./components/MoviesDetails";
import SearchMovies from "./components/SearchMovies";
import Top50Movies from "./components/Top50Movies";

const routes = [ // on déclare les routes
    {
        path: '/App', // path = url
        component: App // composant associé
    },
    {
        path: '/AmericanMovies', 
        component: AmericanMovies 
    },
    {
        path: '/FrenchMovies', 
        component: FrenchMovies 
    },
    {
        path: '/LastMovies', 
        component: LastMovies 
    },
    {
        path: '/MoviesDetails', 
        component: MoviesDetails 
    },
    {
        path: '/SearchMovies', 
        component: SearchMovies 
    },
    {
        path: '/Top50Movies', 
        component: Top50Movies 
    },
]

const router = createRouter({ // j'initialise le routeur
history: createWebHistory(), // j'active le mode historique
routes                       // je lui passe la liste des routes (en syntaxe condensée sinon routes : routes)

});

export default router ;