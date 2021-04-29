<template>
  <ul class="menu">
    <li v-for="(item, index) in menuRoute" :key="index">
      <h2 class="menu-title">{{ item.name }}</h2>
      <ul>
        <template v-if="item.groups">
          <li v-for="(item2, index2) in item.groups" :key="index2">
            <div class="group-title">{{ item2.groupName }}</div>
            <ul>
              <li v-for="(item3, index3) in item2.list" :key="index3" class="menu-item">
                <router-link :to="{ name: item3.name }">{{ item3.title }}</router-link>
              </li>
            </ul>
          </li>
        </template>
        <template v-else>
          <li v-for="(item4, index4) in item.list" :key="index4" class="menu-item">
            <router-link :to="{ name: item4.name }">{{ item4.title }}</router-link>
          </li>
        </template>
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
@import '../../styles/var';

.menu {
  width: 260px;
  padding-top: 10px;
  padding-left: 30px;
  overflow: auto;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 5%);
  box-sizing: border-box;

  .menu-title {
    margin: 10px 0 0;
    font-size: 16px;
    line-height: 30px;
  }

  .group-title {
    margin: 10px 0 0;
    font-size: 12px;
    line-height: 26px;
    color: #999;
  }

  .menu-item {
    height: 40px;
    font-size: 14px;
    line-height: 40px;

    ::v-deep(a) {
      display: block;
      transition: 0.4s;

      &:hover {
        color: $--color-primary;
      }

      &.router-link-exact-active {
        color: $--color-primary;
      }
    }
  }
}
</style>
