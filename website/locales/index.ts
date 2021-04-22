import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.json'
import enUS from './en-US.json'

const lang = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang') : 'zh-CN'

enum Locale {
  'zh-CN' = 'CN',
  'en-US' = 'EN'
}

const i18n = createI18n({
  locale: Locale[lang],
  fallbackLocale: 'EN',
  messages: {
    EN: enUS,
    CN: zhCN
  }
})

export default i18n
