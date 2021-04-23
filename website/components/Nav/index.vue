<template>
  <ul class="nav">
    <li v-for="(item, index) in menuRoute" :key="index">
      <h2 class="">{{ item.name }}</h2>
      <ul v-if="item.groups">
        <li v-for="(item2, index2) in item.groups" :key="index2">
          <h3>{{ item2.groupName }}</h3>
          <ul>
            <li
              v-for="(item3, index3) in item2.list"
              :id="item3.name"
              :key="index3"
              @click="linkTo(item3.name)"
            >
              {{ item3.title }}
            </li>
          </ul>
        </li>
      </ul>

      <ul v-else>
        <li
          v-for="(item4, index4) in item.list"
          :id="item4.name"
          :key="index4"
          @click="linkTo(item4.name)"
        >
          {{ item4.title }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { navs as menuGroup } from '@website/nav.config'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Nav',
  setup() {
    const router = useRouter()

    const state = reactive({
      menuRoute: []
    })

    menuGroup.forEach(groupItem => {
      if (groupItem.groups) {
        groupItem.groups.forEach(menuItem => {
          menuItem.list.forEach(item => {
            delete item.component
            delete item.path
          })
        })
      } else {
        groupItem.list.forEach(item => {
          delete item.component
          delete item.path
        })
      }
    })
    state.menuRoute = menuGroup

    console.log('state. :>> ', menuGroup)

    function linkTo(routeName) {
      router.push({ name: routeName })
    }

    return {
      ...toRefs(state),
      linkTo
    }
  }
})
</script>

<style scoped lang="scss">
.nav {
  color: red;
}
</style>
