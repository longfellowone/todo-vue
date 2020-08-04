import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from 'apollo-boost'

const app = createApp(App)

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8000/',
})

app.provide(DefaultApolloClient, apolloClient)

app.mount('#app')
