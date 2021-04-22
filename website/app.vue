<template>
  <Header />
  <section class="content-wrapper">
    <Nav class="menu-bar" />
    <Container class="doc-wrapper">
      <router-view />
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Header from './components/Header/index.vue'
import Nav from './components/Nav/index.vue'
import Container from './components/Container/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Nav,
    Container
  },
  setup() {
    const state = reactive({ name: 'admin ui' })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;

  .menu-bar {
    width: 200px;
    color: #fff;
    background: rgba(255, 0, 0, 0.4);
  }

  .doc-wrapper {
    flex: 1;
  }
}
</style>
