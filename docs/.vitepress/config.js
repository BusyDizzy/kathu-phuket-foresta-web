import { defineConfig } from 'vitepress'

const SITE_URL = 'https://kathuphuketforesta.com'

export default defineConfig({
  title: 'Kathu Phuket Foresta',
  description: 'Restoring the plant QR project in Kathu, Phuket.',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Kathu Phuket Foresta' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/logo-social.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

    // Google Analytics
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `]
  ],

  transformHead({ pageData }) {
    const path = pageData.relativePath
      ? '/' + pageData.relativePath.replace(/index\\.md$/, '').replace(/\\.md$/, '')
      : '/'
    const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`

    return [
      ['link', { rel: 'canonical', href: canonical }]
    ]
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: false,
    footer: {
      message: 'Community restoration project',
      copyright: '© 2026 Kathu Phuket Foresta'
    }
  }
})