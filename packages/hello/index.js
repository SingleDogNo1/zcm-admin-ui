import Hello from './src/index.vue'

Hello.install = app => {
  app.component(Hello.name, Hello)
}

export default Hello
