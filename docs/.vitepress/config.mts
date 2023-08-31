import { defineConfig } from 'vitepress'
// import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unprompts",
  description: "Unprompts Documentation",
  outDir: 'docs',
	appearance: "dark",
	lastUpdated: true,
	head: [["link", { rel: "icon", href: "/logo.png", type: "image/png" }]],
  themeConfig: {
    logo: {
			light: "/logo.png",
			dark: "/logo.png",
		},
    nav: [
			{
				text: "Guide",
				link: "/getting-started",
			},
		],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/getting-started' },
          { text: 'CLI', link: '/cli' },
          { text: 'Prompts', link: '/prompts' }
        ]
      }
    ],
    search: {
			provider: "local",
		},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unprompts/unprompts' }
    ],
    editLink: {
			text: "Suggest to this page",
			pattern: "https://github.com/unprompts/unprompts/tree/main/docs/:path",
		},

		footer: {
			copyright: "Copyright © 2023-present UnPrompts",
		},
  },
  // vite: {
	// 	plugins: [UnoCSS()],
	// },
})
