import { Box, Button, IconButton, Heading, HStack } from '@chakra-ui/react'
import Paragraph from './Paragraph'
import Section from './Section'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { EmailIcon } from '@chakra-ui/icons'

const Contact = () => {
	return (
		<Section delay={0.3} id='contact'>
			<Heading as='h2' size='md' letterSpacing={'tighter'}>
				Contact
			</Heading>
			<HStack spacing={4} mt={4}>
				{/* <Button
					leftIcon={<IoLogoTwitter />}
					variant='outline'
					as='a'
					href='https://twitter.com/n2dev_'
				>
					@n2dev_
				</Button> */}
				<Button
					leftIcon={<IoLogoGithub />}
					variant='outline'
					as='a'
					href='https://github.com/n2dev'
				>
					@n2dev
				</Button>
				<IconButton
					aria-label='email'
					icon={<EmailIcon />}
					variant='outline'
					as='a'
					href='mailto:info@ntwo.dev'
				/>
			</HStack>
		</Section>
	)
}

export default Contact
