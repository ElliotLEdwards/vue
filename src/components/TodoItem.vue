<template>
    <div class="input-group ml-2 mb-3">
        <div class="input-group-prepend">
            <div class="input-group-text">
                <input type="checkbox" v-on:change="markComplete">
            </div>
        </div>
        <div class="input-group-text">
            <input type="text" v-model="todo.title" class="form-control" v-bind:class="{'is-complete':todo.completed}">
        </div>
        <div class="input-group-append">
            <button class="btn btn-danger" @click="$emit('del-todo', todo.id)" >
                <font-awesome-icon :icon="['fas', 'trash-alt']" />
            </button>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrashAlt)

export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style scoped>
    .is-complete {
        text-decoration: line-through;
    }

</style>