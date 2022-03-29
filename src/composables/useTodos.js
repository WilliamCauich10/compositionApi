import { computed, ref, onActivated } from 'vue'
import { useStore } from 'vuex' 

const useTodos = () => {
    const store = useStore()
    const currentTab = ref('all')
    const isOpen =  ref(false)
    const textTodo = ref('')
    const txtTextoTodo = ref()

    onActivated( () => {
      // txtTextoTodo.value.select()//focus()
    })


    return {
      currentTab,
      isOpen,
      textTodo,
      txtTextoTodo,
      
      pending: computed( () => store.getters['pendingTodos']),
      all: computed( () => store.getters['allTodos']),
      completed: computed( () => store.getters['completedTodos']),
      getTodosByTab:  computed( () => store.getters['getTodosByTab']( currentTab.value ) ),
      
      // Methods
      toggleTodo: ( id ) => store.commit('toggleTodo', id),
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false,
      onSubmit: () => {
        store.commit('createTodo', textTodo.value),
        isOpen.value = false
      }
    }    
} 
export default useTodos