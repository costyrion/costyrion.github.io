import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/costyrion/costyrion',
  },
  logo: (
    <>
      <Image src="/costyrion.png" alt="costyrion" width="150" height="50" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/costyrion/costyrion',
  footer: {
    text: 'Costyrion',
  },
}

export default config
