import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import hljs from 'highlight.js'
import { navs } from '../nav.config'
import i18n from '../locales'

const { locale } = i18n.global

export const indexRoute = [
  {
    path: '/',
    redirect: '/installation'
  }
]

const componentRoutes = []

navs.forEach(navItem => {
  if (navItem.groups) {
    navItem.groups.forEach(groupItem => {
      groupItem.list.forEach(item => {
        componentRoutes.push({
          path: item.path,
          name: item.name,
          meta: {
            name: item.name
          },
          component: item.component
        })
      })
    })
  } else {
    navItem.list.forEach(item => {
      componentRoutes.push({
        path: item.path,
        name: item.name,
        meta: {
          name: item.name
        },
        component: item.component
      })
    })
  }
})

const routes = [...indexRoute, ...componentRoutes]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('语言 :>> ', locale)
  next()
})

router.afterEach(() => {
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

export default router
