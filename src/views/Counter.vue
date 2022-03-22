<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>

  <button @click="increase">+1</button>
  <button @click="dencrease">-1</button>

</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
    name: 'Counter',
    props: {},
    emits:[],
    setup(){
        const { counter, increase, dencrease } = useCounter(25)

        return {
             counter, increase, dencrease
        }
    }
}
</script>

<style>

</style>