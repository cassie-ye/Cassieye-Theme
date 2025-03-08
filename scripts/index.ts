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
    fs.writeJSON(
      './themes/vitesse-black.json',
      getTheme({
        color: 'dark',
        name: 'Vitesse Black',
        black: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/vitesse-light-soft.json',
      getTheme({
        color: 'light',
        name: 'Vitesse Light Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/vitesse-dark-soft.json',
      getTheme({
        color: 'dark',
        name: 'Vitesse Dark Soft',
        soft: true,
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
