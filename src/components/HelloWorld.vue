<template>
  <h1 class="bg-green-500">{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup="props" lang="ts">
/* eslint-disable import/prefer-default-export */
import { ref } from 'vue'

declare const props: {
  msg: string
}

export const count = ref(0)
</script>
