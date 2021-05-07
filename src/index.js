import BAnchor from './components/anchor'
import BAnchorLink from './components/anchor-link'
import BIcon from './components/icon'
import BButton from './components/button'
import BButtonGroup from './components/button-group'
import BBackTop from './components/back-top'
import Message from './components/message'

import * as util from './utils/util'
import { setConfig } from './utils/config'
import log from './utils/log'
import { scrollTop } from './utils/dom'

import { ClickAnimation, ClickOutside, Waves } from './directives'

import config from '../package.json'

const components = [
  BIcon, BButton, BButtonGroup,
  BAnchor, BAnchorLink, BBackTop,
]
const plugins = [
  Message,
]
const defaultInstallOpt = {
  zIndex: 2000,
}
const install = function(app) {
  components.forEach(component => {
    app.use(component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
  // 注册全局指令
  app.directive('Waves', Waves)
  app.directive('ClickAnimation', ClickAnimation)
  app.directive('ClickOutSide', ClickOutside)
  // 注册全局函数和属性
  app.config.globalProperties.$global = defaultInstallOpt
  setConfig(defaultInstallOpt)
  app.config.globalProperties.$title = util.title
  app.config.globalProperties.$open = util.open
  app.config.globalProperties.$copy = util.copy
  app.config.globalProperties.$parseTime = util.parseTime
  app.config.globalProperties.$rangeTime = util.rangeTime
  app.config.globalProperties.$typeOf = util.typeOf
  app.config.globalProperties.$deepCopy = util.deepCopy
  app.config.globalProperties.$getRandomInt = util.getRandomInt
  app.config.globalProperties.$throttle = util.throttle
  app.config.globalProperties.$debounce = util.debounce
  app.config.globalProperties.$scrollTop = scrollTop
  app.config.globalProperties.$log = log
  log.pretty(`[${config.name}] ${config.version}`, config.homepage)
  return app
}

export {
  BAnchor,
  BAnchorLink,
  BIcon,
  BButton,
  BButtonGroup,
  BBackTop,
  Message,
}

export default {
  install,
}
