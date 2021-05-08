import { App } from 'vue'

import ZButton from '../button'
import ZButtonGroup from '../button-group'
import ZIcon from '../icon'

const components = [ZButton, ZButtonGroup, ZIcon]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { ZButton, ZButtonGroup, ZIcon, install }

export default { install }
