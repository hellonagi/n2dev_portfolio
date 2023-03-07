import { Box, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
	return (
		<Box textAlign='center'>
			<Text color='#1967d2'>
				<Link as={NextLink} href='/'>
					Home
				</Link>
				<Link as={NextLink} href='/privacy' pl={2}>
					Privacy Policy
				</Link>
			</Text>
			<Text opacity={0.5}>&copy; {new Date().getFullYear()} n2dev. All Rights Reserved.</Text>
		</Box>
	)
}

export default Footer
