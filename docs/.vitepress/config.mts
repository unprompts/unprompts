import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unprompts",
  description: "Unprompts Documentation",
  outDir: 'docs',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Install', link: '/' },
          { text: 'CLI', link: '/cli' },
          { text: 'Prompts', link: '/prompts' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hunghg255/unprompts' }
    ]
  }
})
