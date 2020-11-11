<template>
    <main class="main-home text-center d-flex m-auto w-100 h-100" role="main">
        <div class="background w-100 h-100 row align-items-center justify-content-center" style="background-color: #eee;">
            <div class="d-flex flex-column">
                <h1 class="title display-5 text-light" style="font-size:3vw;">Welcome to elliotedwards.com ⚡️</h1>
                <div class="d-flex flex-row justify-content-between">
                    <form action="https://github.com/ElliotLEdwards" target="_blank">
                        <button type="button submit" class="btn btn-outline-light" style="font-size:1vw;"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></button>
                    </form>
                    <form action="https://www.linkedin.com/in/elliot-edwards-762805167/" target="_blank">
                        <button type="button submit" class="btn btn-outline-light" style="font-size:1vw;"><font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x" /></button>
                    </form>
                    <form action="https://www.instagram.com/elliot_edw/" target="_blank">
                        <button type="button submit" class="btn btn-outline-light" style="font-size:1vw;"><font-awesome-icon :icon="['fab', 'instagram']" size="2x" /></button>
                    </form>
                    <form action="https://heeds.eu" target="_blank">
                        <button type="button submit" class="btn btn-outline-light " style="font-size:1vw;"><font-awesome-icon :icon="['fas', 'bars']" size="2x" /></button>
                    </form>
                </div>
            </div>
        </div>
        
    </main>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faInstagram)
library.add(faLinkedinIn)
library.add(faGithub)
library.add(faBars)

export default {
    name: "Home",
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>
    .background {
        background: rgb(8,156,230);
        background: linear-gradient(90deg, rgba(8,156,230,1) 0%, rgba(166,29,253,1) 50%, rgba(252,69,69,1) 100%);
    }
    
</style>