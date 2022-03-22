<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changetitle">Cambiar titulo </button>
  </div>
</template>

<script>
import { 
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTriggered,
  onRenderTracked,
  onActivated,
  onDeactivated,
  onServerPrefetch 
} from "vue";


export default {
  setup() {

    const title = ref('about')

    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    })
    onRenderTracked(() => {
      console.log('onRenderTracked');
    })
    onActivated(() => {
      console.log('onActivated');
    })
    onDeactivated(() => {
      console.log('onDeactivated');
    })
    onServerPrefetch(() => {
      console.log('onServerPrefetch');
    })

    return {
      title,
      changetitle: () => title.value = 'New About'
    }
  },
}
</script>
