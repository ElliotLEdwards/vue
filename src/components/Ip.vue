<template>
    <div class="d-flex flex-column justify-content-center">
        <div class="d-inline-flex justify-content-center">
            <h1 class="p-4">
                {{ location }} - {{ isp }}
            </h1>
        </div>
        <div class="d-inline-flex justify-content-center p-4">
            <div class="input-group input-group-lg">
                <input v-model="ipAddress" ref="textToCopy" type="text" class="form-control outline-primary" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
                <div class="input-group-append">
                    <button class="btn btn-outline-primary" id="inputGroup-sizing-lg" @click="copyToClipboard"><font-awesome-icon :icon="['fa', 'copy']" /></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCopy)

export default {
    name: "Ip",
    components: {
        FontAwesomeIcon
    },
    data () {
        return {
            ipAddress: "Can't find IP address",
            location: "Location not found"
        }
    },
    mounted () {
        axios
            .get('http://ip-api.com/json')
            .then(response => (this.ipAddress = response.data.query, 
                                this.location = response.data.city,
                                this.isp = response.data.isp
                ))
        
    },
    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.ipAddress);
        }
    }
        
}
</script>

<style scoped>

</style>