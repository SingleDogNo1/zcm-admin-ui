import { App } from 'vue'

import DtButton from '../button'
import DtIcon from '../icon'

const components = [DtButton, DtIcon]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { DtButton, DtIcon, install }

export default { install }
