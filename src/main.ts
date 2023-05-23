import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Maska from 'maska'
import JsonExcel from 'vue-json-excel3'

const app = createApp(App)

app.use(router)
app.use(JsonExcel)

app.mount('#app')
