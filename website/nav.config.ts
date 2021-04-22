import i18n from './locales'
import { Language } from './enums/language'

const { t, locale } = i18n.global

export const navs = [
  {
    name: t('menu.guide'),
    list: [
      {
        path: '/installation',
        name: 'Installation',
        title: t('components.installation'),
        component: () => import(`./markdown/${Language[locale]}/installation.md`)
      }
    ]
  },
  {
    name: t('menu.component'),
    groups: [
      {
        groupName: t('menu.baseComponent'),
        list: [
          {
            path: '/component/button',
            name: 'Button',
            title: t('components.button'),
            component: () => import(`./markdown/${Language[locale]}/button.md`)
          }
        ]
      }
    ]
  }
]
