import { resolve } from 'path'

export default {
  /*
   ** Headers of the page
   */
  ssr: false,
  head: {
    title: 'Adonuxt',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#744d82' },
  /*
   ** Point to resources
   */
  srcDir: resolve(__dirname, 'resources'),
}
