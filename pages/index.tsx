import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'
import Layout from '../components/Layout'
import About from '../components/About'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'

const Home: NextPage = () => {
	return (
		<Layout>
			<Container>
				<About />
				<Works />
				<Skills />
				<Contact />
			</Container>
		</Layout>
	)
}

export default Home
