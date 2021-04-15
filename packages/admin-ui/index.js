import Hello from '../hello'

const components = [Hello]

const install = app => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  Hello,
  install
}

export default {
  install
}
