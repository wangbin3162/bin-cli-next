import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/type'
import Icon from './icon.vue'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

const _Icon: SFCWithInstall<typeof Icon> = Icon

export default _Icon
