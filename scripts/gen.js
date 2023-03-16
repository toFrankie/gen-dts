import fs from 'fs-extra'
import { obj } from '../src/index.js'

function main() {
  // TODO: 获取合成结果
  console.log(obj)

  // 生成内容
  const fileContent = `
  const obj = ${JSON.stringify(obj)}
  export default obj
  `

  // 导出临时文件
  const tmpPath = `./.gen-tmp/index.js`
  fs.ensureFileSync(tmpPath)
  fs.writeFileSync(tmpPath, fileContent)
}

main()
