<template>
    <div class="card bg-light m-3">
        <div class="card-body d-flex flex-row justify-content-center">
            <form @submit="addTodo">
                <div class="d-flex flex-row justify-content-center">
                    <input class="m-2" type="text" v-model="title" name="title" placeholder="Add Todo...">
                    <button @click="addTodo" type="button" value="Submit" class="m-2 btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault()
            if(this.title) {
                const newTodo = {
                    id: uuidv4(),
                    title: this.title,
                    completed: false
                }
                
                this.$emit('add-todo', newTodo)

                this.title = ''
            }
           
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
</style>