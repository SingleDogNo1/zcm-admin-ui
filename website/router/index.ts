import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import hljs from 'highlight.js'
import { navs } from '../nav.config'
import i18n from '../locales'

const lang = i18n.global.locale

export const indexRoute = [
  // {
  //   path: `/${lang}`,
  //   name: 'HomePage-' + lang,
  //   meta: {
  //     name: 'HomePage',
  //     lang
  //   },
  //   component: () => import(`../markdown/${lang}/index.md`)
  // }
]

const componentRoutes = []

navs.forEach(navItem => {
  navItem.groups.forEach(groupItem => {
    groupItem.list.forEach(item => {
      if (item.path !== '/') {
        componentRoutes.push({
          path: item.path,
          name: item.path.slice(1),
          meta: {
            name: item.path.slice(1)
          },
          component: item.component
        })
      }
    })
  })
})

const routes = [...indexRoute, ...componentRoutes]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('lang :>> ', lang)
  next()
})

router.afterEach(() => {
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

export default router
