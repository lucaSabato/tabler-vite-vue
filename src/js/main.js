import { createApp } from 'vue'
import App from './App.vue'
import Components from '../../dist/core.js'

// Initialize Vue app
createApp(App)
    .use(Components)  // Use the plugin
    .mount('#app')

