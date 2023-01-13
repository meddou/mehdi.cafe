/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    domains: [
      {
        domain: process.env.DOMAIN_EN,
        defaultLocale: 'en',
      },
      {
        domain: process.env.DOMAIN_FR,
        defaultLocale: 'fr',
      },
    ],
  },
}
