<template>
    <header class="header">
        <h1><font-awesome-icon :icon="['fas', 'list']" /> Todo List</h1>
    </header>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faList)
export default {
    name: "Header",
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>
    .header {
        background: #3eaf7c;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    .header a {
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>