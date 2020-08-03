<template>
  <HelloWorld msg="Hello World!" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const add = (num: number) => {
      console.log(num + 3)
    }
    add(2)
  },
})
</script>
