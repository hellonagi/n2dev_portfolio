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
			I am an enthusiastic web developer with skills in both front-end and back-end technologies. I am proficient in languages and frameworks such as HTML, CSS, JavaScript, React, Node.js, and MySQL.
			</Paragraph>
			<Paragraph>
I am always interested in staying up-to-date with the latest best practices for developing websites and web applications, with a focus on usability, security, and performance. I am also keen on working in a team environment, where effective communication and collaboration can contribute to the success of a project.
			</Paragraph>
			<Paragraph>
				I look forward to joining your project and developing amazing websites or applications. Thank you for considering my profile.
			</Paragraph>
		</Section>
	)
}

export default About
