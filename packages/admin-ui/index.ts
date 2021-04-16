import Hello from '../hello'
import { App } from 'vue'

const components = [Hello]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { Hello, install }

export default { install }
