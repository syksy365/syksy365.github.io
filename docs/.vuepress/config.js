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
              { text: 'v1.0.0', link: '/v1.0.0/' }
            ]
          },
          { text: 'Gitee', link: 'https://gitee.com/syksy/syksy-boot' },
        ],
        lastUpdated: true,
        sidebar: [
            {
                title: 'V1.0.0',
                collapsable: false,
                children: [
                    '/v1.0.0/',
                    '/v1.0.0/one.md',
                    '/v1.0.0/two.md'
                ]
            }
        ]
    },
    plugins: ['@vuepress/back-to-top','@vuepress/nprogress']
}