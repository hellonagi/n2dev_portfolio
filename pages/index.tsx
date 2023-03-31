import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'
import Layout from '../components/Layout'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home: NextPage = () => {
	return (
		<Layout>
			<Container>
				<About />
				<Projects />
				<Skills />
				<Contact />
			</Container>
		</Layout>
	)
}

export default Home
