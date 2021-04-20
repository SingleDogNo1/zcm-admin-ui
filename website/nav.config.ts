import { getLang } from './utils/lang'

const localLang = getLang()
const componentsString = localLang === 'en-US' ? 'Components' : '组件'
const baseComponentsString = localLang === 'en-US' ? 'Base Components' : '基础组件'

export const navs = [
  {
    name: componentsString,
    groups: [
      {
        groupName: baseComponentsString,
        list: [
          {
            path: '/button',
            name: 'Button',
            component: () => {
              if (localLang === 'en-US') {
                return import('./markdown/en-US/button.md')
              } else {
                return import('./markdown/zh-CN/button.md')
              }
            }
          }
        ]
      }
    ]
  }
]
