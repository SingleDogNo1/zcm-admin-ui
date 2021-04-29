// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

fs.readFile('./packages/styles/src/icon.scss', 'utf-8', (err, data) => {
  if (err) throw err

  const cssLine = data.toString().split('\n')
  const reg = /\.icon-[a-zA-Z].*?\:before[\s\S]\{/

  const res = []
  cssLine.map(value => {
    if (value.match(reg)) {
      res.push(value.replace('.icon-', '').replace(/\:before[\s\S]\{/, ''))
    }
  })

  let text = `/* eslint-disable-next-line */
export default [`

  res.forEach((value, index) => {
    text += index === res.length - 1 ? `'${value}'` : `'${value}', `
  })

  text += ']'

  fs.writeFile('./website/icon.ts', text, 'utf-8', err => {
    if (err) throw err

    console.log('创建成功')
  })
})
