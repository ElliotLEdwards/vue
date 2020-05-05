<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" style="color: #3eaf7c">
            <font-awesome-icon :icon="['fab', 'vuejs']" />
            Elliot Edwards
        </a>
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