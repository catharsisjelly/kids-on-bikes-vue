import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import { createAuth0 } from '@auth0/auth0-vue'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/main.css'

const app = createApp(App)

app
  .use(PrimeVue)
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENTID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  )
  .use(ConfirmationService)
  .use(createPinia())
  .use(router)
  .mount('#app')
