import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Box as='main' pb={8}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>n2dev</title>
			</Head>

			<Navbar />

			<Container maxW='container.md' pt={14}>
				{children}

				<Footer />
			</Container>
		</Box>
	)
}

export default Layout
