import { createApp } from 'vue'
import router from './route'
import App from './App.vue'

import DemoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav.vue'

import lib from '../src/index'
import '../src/styles/index.styl'

import './assets/styles/color-brewer.css'
import './assets/styles/index.styl'
import icon from '../src/components/icon/iconfont.json'

const icons = icon.glyphs.map(i => icon.css_prefix_text + i.font_class)

const app = createApp(App)

app.config.globalProperties.$icon = icons
app.component('DemoBlock', DemoBlock)
app.component('MainHeader', MainHeader)
app.component('MainFooter', MainFooter)
app.component('SideNav', SideNav)
app.use(lib)
app.use(router)
app.mount('#app')
