export let curLang = window.sessionStorage.getItem('lang')

export const langTransformMap = {
  zh: 'zh-CN',
  en: 'en-US'
}

export function setLang(langType) {
  window.sessionStorage.setItem('lang', langType)
}

export function transformLang(originalLang) {
  let langTransform = langTransformMap[originalLang]
  if (langTransform === undefined) langTransform = originalLang
  curLang = langTransform
  return langTransform
}

export function getLang(lang?: string): string {
  if (curLang == null || curLang === '') {
    const langTransform = transformLang(window.sessionStorage.getItem('lang') || navigator.language)
    setLang(langTransform)
    return langTransform
  } else {
    return lang ? window.sessionStorage.getItem('lang') || navigator.language : curLang
  }
}
