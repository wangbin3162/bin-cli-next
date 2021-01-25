import type { App } from 'vue'
import BIcon from './components/icon'
import BButton from './components/button'
import BButtonGroup from './components/button-group'

import { copy } from './utils/util'
import log from './utils/log'

import { ClickAnimation, ClickOutside, Waves } from './directives'
// @ts-ignore
import config from '../package.json'

const components = [
  BIcon, BButton, BButtonGroup,
]

const install = function (app: App) {
  components.forEach(component => {
    app.use(component)
  })
  // 注册全局指令
  app.directive('Waves', Waves)
  app.directive('ClickAnimation', ClickAnimation)
  app.directive('ClickOutSide', ClickOutside)
  // 注册全局函数和属性
  app.config.globalProperties.$global = { zIndex: 2000 }
  app.config.globalProperties.$copy = copy
  app.config.globalProperties.$log = log
  log.pretty(`[${config.name}] ${config.version}`, config.homepage)
  return app
}

export default {
  install, BIcon, BButton, BButtonGroup,
}
