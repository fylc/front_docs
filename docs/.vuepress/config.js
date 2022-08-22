// vuepress必要的配置文件
module.exports = {
  title: '前端文档库',
  description: '记录前端学习路径，分享前端学习经验',
  head: [
    ['link', { rel: 'icon', href: 'https://git.poker/fylc/image_hosting/blob/master/20220414/QQ20220822-0.syr07hyzq28.jpg?raw=true' }],
  ],
  port: 8080,
  themeConfig: {
    logo: 'https://git.poker/fylc/image_hosting/blob/master/20220414/QQ20220822-0.syr07hyzq28.jpg?raw=true',
    nav: [
      { text: 'Vue', link: '/vue/' },
      { text: 'About', link: '/about/' },
      { text: 'Interview', link: '/interview/' }
    ]
  },
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}],
    ['demo-container'],
    ['@vuepress/back-to-top']
  ]
}