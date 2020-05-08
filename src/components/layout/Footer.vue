<template>
    <footer class="mt-auto text-center bg-light text-dark d-flex flex-row">
        <div class="p-2 text-muted">elliotedwards.com all rights reserved</div>
        <div class="ml-auto justify-content-center align-self-center">
            <a class="p-1" href="https://github.com/ElliotLEdwards" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a class="p-1" href="https://www.linkedin.com/in/elliot-edwards-762805167/" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a class="p-1" href="https://www.instagram.com/elliot_edw/" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
        </div>
    </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faInstagram)
library.add(faLinkedinIn)
library.add(faGithub)

export default {
    name: "Footer",
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>

</style>