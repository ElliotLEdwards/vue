<template>
    <div>
        <p class="display-4 pl-4 pt-4"><font-awesome-icon :icon="['fas', 'tools']" size="sm" :style="{ color: '#007BFF' }"  /> Tools.</p>
        <div class="card-deck p-4">
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'bootstrap']" size="10x" :style="{ color: '#553c7b' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Bootstrap 4</h5>
                <p class="card-text">Great front-end framework integrated to Vue.js. Flex, Cards, Labels, Buttons ... Almost everything you can see on this website is from Bootstrap. Try the resposiveness on your phone !</p>
                <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Learn more</button></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'vuejs']" size="10x" :style="{ color: '#3eaf7c' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Vue.js</h5>
                <p class="card-text">The whole website is using the brillient Vue.js framework. Excellent alternative to heavear, more complcated fraworks like React or Angular.</p>
                <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Learn more</button></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'font-awesome']" size="10x" :style="{ color: '#339AF0' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Font Awesome</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Learn more</button></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'npm']" size="10x" :style="{ color: '#BD423B' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">npm</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Learn more</button></div>
                </div>
            </div>
        </div>
        <p class="display-4 pl-4"><font-awesome-icon :icon="['fas', 'code']" size="sm" :style="{ color: '#F0DB4F' }"  /> Languages.</p>
        <div class="card-deck p-4">
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'js']" size="10x" :style="{ color: '#F0DB4F' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Javascript</h5>
                <p class="card-text">Great front-end framework integrated to Vue.js. Flex, Cards, Labels, Buttons ... Almost everything you can see on this website is from Bootstrap. Try the resposiveness on your phone !</p>
                <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Learn more</button></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'html5']" size="10x" :style="{ color: '#E44D26' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">HTML 5</h5>
                <p class="card-text">The whole website is using the brillient Vue.js framework. Excellent alternative to heavear, more complcated fraworks like React or Angular.</p>
                <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Learn more</button></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'css3-alt']" size="10x" :style="{ color: '#264DE4' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">CSS 3</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-primary">Learn more</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faTools } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faVuejs, faFontAwesome, faNpm, faJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBootstrap)
library.add(faVuejs)
library.add(faFontAwesome)
library.add(faNpm)
library.add(faCode)
library.add(faTools)
library.add(faJs)
library.add(faHtml5)
library.add(faCss3Alt)

export default {
    name: "About",
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>

</style>