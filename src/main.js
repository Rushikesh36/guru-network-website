import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import Vue3Autocounter from 'vue3-autocounter';
import VueTypewriterEffect from "vue-typewriter-effect";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.component('vue3-autocounter',Vue3Autocounter);
app.component('vue-typewriter-effect', VueTypewriterEffect);
app.use(vuetify)
app.use(router);
app.use(store);
app.mount('#app')
