<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand fs-1 logo" href="/">Moovies</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="link text-center nav-link text-dark mx-5">Accueil</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/AmericanMovies" class="link text-center nav-link text-dark mx-5">Films
                            américains</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/FrenchMovies" class="link text-center nav-link text-dark mx-5">Films
                            français</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/LastMovies" class="link text-center nav-link text-dark mx-5">2023
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/Top50Movies" class="link text-center nav-link text-dark mx-5">Top 50
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/SearchMovies" class="link text-center nav-link text-dark mx-5">Rechercher
                        </router-link>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderNav"
}
</script>




<style>
.logo{
    font-family: 'Big Shoulders Inline Text', cursive;
}
</style>