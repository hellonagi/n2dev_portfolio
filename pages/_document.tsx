import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name='description' content='n2devのページ' />
				<meta name='author' content='n2dev' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<meta name='twitter:title' content='n2dev' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@n2dev_' />
				<meta name='twitter:creator' content='@n2dev_' />
				<meta name='twitter:image' content='https://www.ntwo.dev/n2dev.png' />
				<meta property='og:site_name' content='n2dev' />
				<meta name='og:title' content='n2dev' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='https://www.ntwo.dev/n2dev.png' />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
