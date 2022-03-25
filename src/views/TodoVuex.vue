<template>
  <h1>Lista de tareas de thanos</h1>
  <!-- <h4>Tareas: {{ $store.state.todos.length}} </h4> -->
  <!-- <h4>Tareas: {{ $store.state.todos.filter( t => !t.completed).length }} </h4> -->
  <h4>Tareas: {{ pending.length }} </h4>

  <hr>
  <button>Todos</button>
  <button>Pendientes</button>
  <button>Completados</button>

</template>

<script>

import { computed } from 'vue'
import { useStore } from 'vuex'

export default {

  setup() {
    
    const store = useStore()

    // const pending = computed( () => store.getters['pendingTodos'])

    return {
      pending: computed( () => store.getters['pendingTodos']),
      all: computed( () => store.getters['allTodos']),
      completed: computed( () => store.getters['completedTodos'])
    }    

  }
}
</script>

<style>

</style>