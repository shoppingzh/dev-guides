const { listFilesByOrder, generateSidebar } = require('vuepress-util')
const { navs } = require('../../config.js')
const path = require('path')

module.exports = {
  base: '/dev/',
  title: '开发规范',
  description: '  ',

  // 性能相关
  cache: false,

  // 浏览器兼容
  evergreen: true, // 只适配现代浏览器

  // 插件
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img'
    }
  },

  // 主题
  theme: 'reco',
  themeConfig: {
    // logo: '/logo.png',
    mode: 'light',
    modePicker: false,
    lastUpdated: '最后更新时间',
    subSidebar: 'auto',
    // 导航栏
    nav: [{
      text: '编码规范',
      link: `/code/${listFilesByOrder(path.resolve(__dirname, '../code'), f => !/^\./.test(f.name))[0].name}`
    }, {
      text: 'ESLint配置',
      link: '/ESLint配置'
    }, {
      text: '其他资源',
      items: [{
        text: 'ESLint',
        link: 'https://cn.eslint.org/docs/rules/'
      }, {
        text: 'Vue风格指南',
        link: 'https://cn.vuejs.org/v2/style-guide/'
      }, {
        text: 'Vue ESLint',
        link: 'https://eslint.vuejs.org/'
      }, {
        text: '京东前端开发规范',
        link: 'https://guide.aotu.io/index.html'
      }, {
        text: '腾讯前端开发规范',
        link: 'https://imweb.github.io/CodeGuide/'
      }]
    }],
    sidebar: generateSidebar()
  }
}


