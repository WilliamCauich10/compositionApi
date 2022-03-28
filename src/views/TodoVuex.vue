<template>
  <h1>Lista de tareas de thanos</h1>
  <!-- <h4>Tareas: {{ $store.state.todos.length}} </h4> -->
  <!-- <h4>Tareas: {{ $store.state.todos.filter( t => !t.completed).length }} </h4> -->
  <h4>Tareas: {{ pending.length }} </h4>

  <hr>
  <button 
    :class="{ 'active': currentTab === 'all' }"
    @click="currentTab = 'all'"
    >
      Todos
  </button>
  <button 
    :class="{ 'active': currentTab === 'pending' }"
    @click="currentTab = 'pending'"
    >
      Pendientes
  </button>
  <button 
    :class="{ 'active': currentTab === 'completed' }"
    @click="currentTab = 'completed'"
    >
      Completados
  </button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
        :class="{ 'completed': todo.completed }"
        @dblclick="toggleTodo( todo.id )">
        {{ todo.text }}
      </li>
    </ul>
  </div>


<button @click="openModal">Crear Todo</button>
<modal v-if="isOpen" title="Hola mundo" @on:close="closeModal"> 
  <template v-slot:header>
      <h2>Titulo del modal</h2>
  </template>

  <template v-slot:body>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        placeholder="Texto Todo"
        v-model="textTodo"
        ref="txtTextoTodo"
      >
    </form>
  </template>

</modal>

</template>


<script>

import useTodos from "../composables/useTodos";
import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal
  },

  setup() {
    
    const { currentTab, getTodosByTab, pending, toggleTodo, isOpen, openModal, closeModal, textTodo,
      txtTextoTodo, onSubmit
    } = useTodos()
    
    return {
      currentTab,
      getTodosByTab,
      pending,
      toggleTodo,
      isOpen, 
      openModal, 
      closeModal,
      textTodo,
      txtTextoTodo, onSubmit
    }
  }
}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

</style>