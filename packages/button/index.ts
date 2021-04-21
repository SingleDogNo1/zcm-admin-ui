import DtButton from './src/index.vue'

DtButton.install = app => {
  app.component(DtButton.name, DtButton)
}

export default DtButton
