import { createRouter, createWebHashHistory } from 'vue-router'
import { nextTick } from 'vue'
import hljs from 'highlight.js'
import { navs } from '../nav.config'

// import { getLang } from '../utils/lang'

// const lang = getLang()

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

router.afterEach(() => {
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

export default router
