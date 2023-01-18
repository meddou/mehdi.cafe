import useTranslations from '@translation/useTranslations'
import Document, {
  DocumentContext, DocumentInitialProps,
  Head, Html, Main, NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const AppDocument = () => {
  const t = useTranslations()

  return (
    <Html lang={t.lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

AppDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () => originalRenderPage({
      // eslint-disable-next-line
      enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
    })
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}

export default AppDocument
