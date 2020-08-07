<template>
    <div>
        <p class="display-4 pl-4 pt-4"><font-awesome-icon :icon="['fas', 'tools']" size="sm" :style="{ color: '#553c7b' }"  /> Tools.</p>
        <div class="card-deck p-4">
             <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'vuejs']" size="10x" :style="{ color: '#3eaf7c' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Vue.js</h5>
                <p class="card-text">The whole website is using the brilliant Vue.js framework. Excellent alternative to heavier, more complcated fraworks like React or Angular.</p>
                <div class="d-flex justify-content-center"><a href="https://vuejs.org/" target="_blank" type="button" class="btn btn-outline-primary">Learn more</a></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'bootstrap']" size="10x" :style="{ color: '#553c7b' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Bootstrap 4</h5>
                <p class="card-text">Great front-end framework integrated to Vue.js. Flex, Cards, Labels, Buttons ... Almost everything you can see on this website is from Bootstrap. Try the resposiveness on your phone !</p>
                <div class="d-flex justify-content-center"><a href="https://getbootstrap.com/" target="_blank" type="button" class="btn btn-outline-primary">Learn more</a></div>
                </div>
            </div>
           <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'npm']" size="10x" :style="{ color: '#BD423B' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">npm</h5>
                <p class="card-text">Where on earth could I get all the resources to build this website ? The answer is npm, one of the largest packet managers available for web developers.</p>
                <div class="d-flex justify-content-center"><a href="https://www.npmjs.com/" target="_blank" type="button" class="btn btn-outline-primary">Learn more</a></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'font-awesome']" size="10x" :style="{ color: '#339AF0' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Font Awesome</h5>
                <p class="card-text">Thanks to Font Awsome's large catalog of icons, I was able to make the website look pretty good ... Or I think so at least.</p>
                <div class="d-flex justify-content-center"><a href="https://fontawesome.com/" target="_blank" type="button" class="btn btn-outline-primary">Learn more</a></div>
                </div>
            </div>
            
        </div>
        <p class="display-4 pl-4"><font-awesome-icon :icon="['fas', 'code']" size="sm" :style="{ color: '#F0DB4F' }"  /> Languages.</p>
        <div class="card-deck p-4">
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'js']" size="10x" :style="{ color: '#F0DB4F' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">Javascript</h5>
                <p class="card-text">The future of the web lies in JavaScript, after messing around with Symfony (or PHP) in my professional life, I decided to go with te much cooler JS for this website.</p>
                <div class="d-flex justify-content-center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" type="button" class="btn btn-outline-primary">Learn more</a></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'html5']" size="10x" :style="{ color: '#E44D26' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">HTML 5</h5>
                <p class="card-text">Do I really need to explain why I used HTML ? Probably not. How would I even structure my pages ?</p>
                <div class="d-flex justify-content-center"><a href="https://www.w3.org/html/" target="_blank" type="button" class="btn btn-outline-primary">Learn more</a></div>
                </div>
            </div>
            <div class="card p-2">
                <div class="d-flex justify-content-center"><font-awesome-icon :icon="['fab', 'css3-alt']" size="10x" :style="{ color: '#264DE4' }"  /></div>
                <div class="card-body">
                <h5 class="card-title">CSS 3</h5>
                <p class="card-text">Same story here, even though the heavy lifting is done by Bootstrap, I still need good old CSS to prettify my pages.</p>
                <div class="d-flex justify-content-center"><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" type="button" class="btn btn-outline-primary">Learn more</a></div>
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