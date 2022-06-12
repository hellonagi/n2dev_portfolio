import { Box, Heading } from '@chakra-ui/react'
import Paragraph from './Paragraph'
import Section from './Section'

const About = () => {
	return (
		<Section id='about'>
			<Heading as='h2' size='md' letterSpacing={'tighter'}>
				About
			</Heading>
			<Paragraph>
				個人でweb開発をやっています
			</Paragraph>
		</Section>
	)
}

export default About
