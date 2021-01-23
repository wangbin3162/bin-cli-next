import type { App } from 'vue'
import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'

import { copy } from './utils/util'
import log from './utils/log'

import { ClickAnimation, ClickOutside, Waves } from './directives'
// @ts-ignore
import config from '../package.json'

const components = [
  Icon, Button, ButtonGroup,
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
  let baseUrl = 'https://wangbin3162.gitee.io'
  log.pretty(`[${config.name}] ${config.version}`, `${baseUrl}/${config.name}`)
  return app
}

export default {
  install, Icon, Button, ButtonGroup,
}
