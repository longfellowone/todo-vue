<template>
  <h1 class="bg-green-500">{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup="props" lang="ts">
import { ref } from 'vue'
// import { useQuery } from '@vue/apollo-composable'
// import gql from 'graphql-tag'

// const { result } = useQuery(gql`
//   query Todos {
//     todos {
//       id
//       text
//     }
//   }
// `)

// console.log(result)

declare const props: {
  msg: string
}

export const count = ref(0)
</script>
