import type { App } from 'vue'
import Icon from './components/icon'

import { copy } from './utils/util'
import log from './utils/log'

// @ts-ignore
import config from '../package.json'

let baseUrl = 'https://wangbin3162.gitee.io'
const components = [
  Icon,
]

const install = function (app: App) {
  components.forEach(component => {
    app.use(component)
  })

  // 注册全局函数和属性
  app.config.globalProperties.$global = { zIndex: 2000 }
  app.config.globalProperties.$copy = copy
  app.config.globalProperties.$log = log
  log.pretty(`[${config.name}] ${config.version}`, `${baseUrl}/${config.name}`)
  return app
}

export default {
  install, Icon,
}
