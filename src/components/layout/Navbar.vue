<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" style="color=#42b883">
            <font-awesome-icon :icon="['fas', 'space-shuttle']" />
                Elliot Edwards
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link class="text-light" to="/home">Home</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link class="text-light" to="/todos">Todos</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link class="text-light" to="/spotify">Spotify</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link class="text-light" to="/ip">IP address</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link class="text-light" to="/about">About</router-link>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
            
        
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpaceShuttle)

//Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
    name: "Navbar",
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>

</style>