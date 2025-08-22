import React from 'react'

export default {
  project: { link: 'https://github.com/maihatch/ERPNext-HP-SSG-v3' },
  docsRepositoryBase: 'https://github.com/maihatch/ERPNext-HP-SSG-v3/blob/main',
  titleSuffix: ' – MyHaTch Knowledge',
  logo: <span>MyHaTch Knowledge</span>,
  search: true,
  footer: { text: <span>© {new Date().getFullYear()} MyHaTch</span> },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – MyHaTch Knowledge'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="ERPNext の導入・運用に関するナレッジ集（MyHaTch）" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: '目次',
  },
  primaryHue: 25, // オレンジ色
  primarySaturation: 100,
  // App Router との互換性のため、ナビゲーションを簡素化
  navigation: {
    prev: true,
    next: true
  }
}
