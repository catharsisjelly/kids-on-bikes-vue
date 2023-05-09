<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'

const auth0 = useAuth0()

const isAuthenticated = auth0.isAuthenticated
const isLoading = auth0.isLoading
const login = () => {
  auth0.loginWithRedirect()
}
const logout = () => {
  auth0.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })
}
const foo = ref(window.location.origin)
</script>

<template>
  <nav>
    <ul>
      <li v-if="!isAuthenticated && !isLoading">
        <a data-testid="login" @click="login">Login</a>
      </li>
      <li v-if="isAuthenticated">
        <a @click="logout">Log Out</a>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="character" href="">Character</router-link>
      </li>
    </ul>
  </nav>
</template>
