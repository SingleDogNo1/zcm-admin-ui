import ElButton from './src/index.vue'

ElButton.install = app => {
  app.component(ElButton.name, ElButton)
}

export default ElButton
