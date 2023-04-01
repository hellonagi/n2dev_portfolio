import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import Section from './utils/Section'
import HTML5 from '../public/devicons/html5-original.svg'
import CSS3 from '../public/devicons/css3-original.svg'
import JS from '../public/devicons/javascript-original.svg'
import TS from '../public/devicons/typescript-original.svg'
import NODEJS from '../public/devicons/nodejs-original.svg'
import REACT from '../public/devicons/react-original.svg'
import EXPRESS from '../public/devicons/express-original.svg'
import NEXT from '../public/devicons/nextjs-original.svg'
import MYSQL from '../public/devicons/mysql-original.svg'
import PYTHON from '../public/devicons/python-original.svg'
import CSHARP from '../public/devicons/csharp-original.svg'
import P5 from '../public/devicons/p5js.svg'

const SVGIcon = ({ name, SVG }: any) => {
	return (
		<Box m={1} p={3} rounded='md' bg={useColorModeValue('#eee', '#333')}>
			<SVG width={64} />
			<Heading mt={1} as='div' size='xs' letterSpacing={'tighter'} textAlign='center'>
				{name}
			</Heading>
		</Box>
	)
}

const Skills = () => {
	return (
		<Section delay={0.1} id='skills'>
			<Heading as='h2' size='md' letterSpacing={'tighter'}>
				Skills
			</Heading>
			<Flex flexWrap='wrap' mt={2}>
				<SVGIcon name='HTML5' SVG={HTML5} />
				<SVGIcon name='CSS3' SVG={CSS3} />
				<SVGIcon name='JavaScript' SVG={JS} />
				<SVGIcon name='TypeScript' SVG={TS} />
				<SVGIcon name='Node.js' SVG={NODEJS} />
				<SVGIcon name='React' SVG={REACT} />
				<SVGIcon name='Express' SVG={EXPRESS} />
				<SVGIcon name='Next.js' SVG={NEXT} />
				<SVGIcon name='MySQL' SVG={MYSQL} />
				<SVGIcon name='Python' SVG={PYTHON} />
				<SVGIcon name='C#' SVG={CSHARP} />
				<SVGIcon name='p5.js' SVG={P5} />
			</Flex>
		</Section>
	)
}

export default Skills
