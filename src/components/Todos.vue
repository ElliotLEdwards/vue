<template>
    <div>
        <Header />
        <div class="d-flex flex-column">
            <AddTodo class="p-2" v-on:add-todo="addTodo" />
        </div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" v-on:del-todo="deleteTodo(todo.id)" />
        </div>
    </div>    
</template>

<script>
import TodoItem from './TodoItem'
import Header from './layout/Header'
import AddTodo from './AddTodo'

export default {
    name: "Todos",
    components: {
        TodoItem,
        Header,
        AddTodo
    },
    methods: {
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        addTodo(newTodo) {
            this.todos = [...this.todos, newTodo];
        }
    },
    data() {
        return {
            todos: []
        }
    }
}
</script>

<style scoped>

</style>