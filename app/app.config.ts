export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Christian Dogmatics'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt-ui-pro/docs',
      'target': '_blank',
      'aria-label': 'Docs template on GitHub'
    }]
  },
  footer: {
    credits: 'Made by Kyrie Eleison',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-nuxtdotjs',
      'to': 'https://github.com/lutherans',
      'target': '_blank',
      'aria-label': 'Lutherans on GitHub'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/invite/ps2h6QT',
      'target': '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/nuxt_js',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/lutherans/christian-dogmatics',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Big screen menu',
      edit: 'https://github.com/lutherans/christian-dogmatics/content',
      links: [{
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Report issue',
        to: 'https://github.com/lutherans/christian-dogmatics/issues',
        target: '_blank'
      }, {
        icon: 'i-heroicons-star',
        label: 'Discussions',
        to: 'https://github.com/lutherans/christian-dogmatics/discussions',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Download files',
        to: 'https://github.com/lutherans/christian-dogmatics',
        target: '_blank'
      }]
    }
  }
})
