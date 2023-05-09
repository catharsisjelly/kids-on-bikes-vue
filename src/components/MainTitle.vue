<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import Navigation from './Navigation.vue'

const auth0 = useAuth0()
const isAuthenticated = auth0.isAuthenticated
const user = auth0.user
</script>

<template>
  <div class="card">
    <div class="flex card-container">
      <h1>Kids on Bikes Helper</h1>
    </div>
  </div>

  <Navigation />

  <div v-if="isAuthenticated">
    <h2 data-testid="userEmail">Welcome {{ user.email }}</h2>
  </div>
</template>
