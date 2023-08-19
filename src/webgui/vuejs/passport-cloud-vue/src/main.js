import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router'
import store from './store'

import AdminFrame from './components/frames/admin/index.vue'
import SimpleFrame from './components/frames/simple/index.vue'
import UserFrame from './components/frames/user/index.vue'
import Timer from './components/utils/timer.vue'


const app = createApp(App)

app.component("admin-frame", AdminFrame)
app.component("simple-frame", SimpleFrame)
app.component("user-frame", UserFrame)
app.component("pp-timer", Timer)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(store).use(router).mount('#app')
