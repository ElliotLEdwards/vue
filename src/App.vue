<template>
  <div id="app">
    <Navbar />
    <Header />
    <div class="d-flex flex-column">
      <AddTodo class="p-2" v-on:add-todo="addTodo" />
      <Todos class="p-2" v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Navbar from './components/layout/Navbar'

export default {
  name: 'App',
  components: {
    Todos,
    Header,
    Navbar,
    AddTodo
  },
  data() {
    return {
      todos: [
      
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
}
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap';


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
