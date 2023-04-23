//Next document
import Document, { Html, Head, Main, NextScript } from 'next/document';
//Import emotion Cache server
import createEmotionServer from '@emotion/server/create-instance';
// We import to assure that MUI styles are loaded first.
import CreateEmotionCache from '../src/styles/CreateEmotionCache';

//Import dark theme component
import DarkTheme from '../src/styles/DarkTheme';
//Import light component
import LightTheme from '../src/styles/LightTheme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={DarkTheme.palette.primary.main} />
          {/* Favicon icons  */}
          <link rel="shortcut icon" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* Android Icons */}
          <link
            rel="shortcut icon"
            href="/android-chrome-192x129.png"
            sizes="196x196"
          />
          <link
            rel="shortcut icon"
            href="/android-chrome-192x129.png"
            sizes="32x32"
          />
          <link
            rel="shortcut icon"
            href="/android-chrome-192x129.png"
            sizes="16x16"
          />
          {/* Apple Touch Icons */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            sizes="167x167"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            sizes="152x152"
          />
          {/* Windows App Icons */}
          <meta
            name="msapplication-square70x70logo"
            content="/android-chrome-192x129.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/android-chrome-192x129.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/android-chrome-192x129.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/android-chrome-192x129.png "
          />
          {/* Google Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = CreateEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
