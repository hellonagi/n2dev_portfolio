import { extendTheme } from '@chakra-ui/react'
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'

const styles = {
	global: (props: GlobalStyleProps) => ({
		body: {
			bg: mode('#F4F5F7', '#202023')(props),
		},
	}),
}

const components = {
	Heading: {
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: '#525252',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: (props: GlobalStyleProps) => ({
			color: mode('#3d7aed', '#ff63c3')(props),
			textUnderlineOffset: 3,
		}),
	},
}

// const fonts = {
// 	heading: "'M PLUS Rounded 1c'",
// }

const colors = {
	grassTeal: '#88ccca',
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, colors })
export default theme
