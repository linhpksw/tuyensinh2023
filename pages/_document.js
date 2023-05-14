import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='vn'>
            <Head>
                <meta property='og:image' content='../public/img/hsg-1.jpg' />
                <script src='/js/flowbite.min.js' defer></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
