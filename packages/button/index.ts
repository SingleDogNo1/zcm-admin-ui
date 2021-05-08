import ZButton from './src/index.vue'

ZButton.install = app => {
  app.component(ZButton.name, ZButton)
}

export default ZButton
