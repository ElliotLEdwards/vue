<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" style="color=#42b883">
            <font-awesome-icon :icon="['fab', 'vuejs']" />
                Elliot Edwards
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/home">Home</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/todos">Todos</router-link>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
            
        
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faVuejs)

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