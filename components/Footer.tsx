import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
	const linkColor = useColorModeValue('#1a202c', '#fff')

	return (
		<Box textAlign='center'>
			<Text>
				<Link color={linkColor} as={NextLink} href='/'>
					Home
				</Link>
				<Link color={linkColor} as={NextLink} href='/privacy' pl={2}>
					Privacy Policy
				</Link>
			</Text>
			<Text mt={1}>&copy; {new Date().getFullYear()} n2dev. All Rights Reserved.</Text>
		</Box>
	)
}

export default Footer
