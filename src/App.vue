<template>
  <h1>Lista de la compra</h1>
  <form @submit.prevent="addNewTodo">
    <label for="newTodo"></label>
    <input v-model="newTodo" type="text" name="newTodo" />
    <button>Agregar articulo a la lista</button>
  </form>
  <button @click="markAllDone">Marcar todos</button>
  <button @click="removeAll">Borrar todos</button>
  <ul>
    <li v-for="(todo, index) in todoList" :key="todo.id" class="todo">
      <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">
        {{ todo.content }}
      </h3>
      <button @click="removeTodo(index)">Borrar</button>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    //
    const newTodo = ref("");
    const todoList = ref([]);
    //
    function addNewTodo() {
      todoList.value.push({
        id: Date.now(),
        done: false,
        content: newTodo.value,
      });
      newTodo.value = "";
    }
    //
    function toggleDone(todo) {
      todo.done = !todo.done;
    }
    //
    function removeTodo(index) {
      todoList.value.splice(index, 1);
    }
    //
    function markAllDone() {
      todoList.value.forEach((todo) => (todo.done = true));
    }
    //
    function removeAll() {
      todoList.value = [];
    }
    return {
      addNewTodo,
      newTodo,
      todoList,
      toggleDone,
      removeTodo,
      markAllDone,
      removeAll,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.done {
  text-decoration: line-through;
}
.todo {
  cursor: pointer;
}
</style>
