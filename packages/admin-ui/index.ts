import { App } from 'vue'

import ElButton from '../button'

const components = [ElButton]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { ElButton, install }

export default { install }
