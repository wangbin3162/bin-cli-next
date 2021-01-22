import { createApp } from 'vue'
import router from './route'
import App from './App.vue'

import DemoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav.vue'

import './assets/styles/color-brewer.css'
import './assets/styles/index.styl'

const app = createApp(App)
app.component('DemoBlock', DemoBlock)
app.component('MainHeader', MainHeader)
app.component('MainFooter', MainFooter)
app.component('SideNav', SideNav)
app.use(router)
app.mount('#app')
