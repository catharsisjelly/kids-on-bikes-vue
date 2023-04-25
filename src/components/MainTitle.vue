<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

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
const user = auth0.user
</script>

<template>
  <div class="card">
    <div class="flex card-container">
      <h1>Kids on Bikes Helper</h1>
    </div>
  </div>
  <nav>
    <ul>
      <li v-if="!isAuthenticated && !isLoading">
        <a @click="login">Login</a>
      </li>
      <li v-if="isAuthenticated">
        <a @click="logout">Log Out</a>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="character" href="">Character</router-link>
      </li>
    </ul>
  </nav>
  <div v-if="isAuthenticated">
    <h2>Welcome {{ user.email }}</h2>
  </div>
</template>
