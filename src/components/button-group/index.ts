import { App } from 'vue'
import type { SFCWithInstall } from '../../utils/type'
import ButtonGroup from '../button/button-group.vue'

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

const _ButtonGroup: SFCWithInstall<typeof ButtonGroup> = ButtonGroup

export default _ButtonGroup
