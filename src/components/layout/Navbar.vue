<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <font-awesome-icon icon="user-secret" />
            elliotedwards.com
        </a>
    </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

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