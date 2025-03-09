/*
 * @Author: cassie-ye cassie20190909@gmail.com
 * @Date: 2025-03-09 10:22:12
 * @LastEditors: cassie-ye cassie20190909@gmail.com
 * @LastEditTime: 2025-03-09 10:22:29
 * @FilePath: \Cassieye-Theme\scripts\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from 'fs-extra'
import getTheme from './theme'
import { getXtermTheme } from './extra'

console.log('starting')

// 创建目录并生成主题文件
fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/Cassieye-light.json',
      getTheme({
        color: 'light',
        name: 'Cassieye Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/Cassieye-dark.json',
      getTheme({
        color: 'dark',
        name: 'Cassieye Dark',
      }),
      { spaces: 2 },
    ),
  ]))

// 创建目录并生成终端主题文件
fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-vitesse-light.json',
      getXtermTheme({
        color: 'light',
        name: 'Vitesse Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-dark.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-black.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Black',
        black: true,
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
