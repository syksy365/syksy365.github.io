module.exports = {
  base: '/',
  title: 'syksy',
  description: 'syksy官方文档',
  themeConfig: {
    logo: '/min-syksy.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '版本',
        ariaLabel: '版本菜单',
        items: [
          { text: '版本一', link: '/v1/' }
        ]
      },
      { text: 'Gitee', link: 'https://gitee.com/syksy/syksy-boot' },
    ],
    lastUpdated: true,
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/getting-started.md'
        ]
      },
      {
        title: '版本一',
        collapsable: false,
        children: [
          '/v1/',
          '/v1/one.md',
          '/v1/two.md'
        ]
      }
    ]
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}