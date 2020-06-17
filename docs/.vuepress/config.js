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
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
  ],
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
  serviceWorker: true
}