import { motion } from 'framer-motion'
import { Box, BoxProps, chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = motion<Omit<BoxProps, 'transition'>>(Box)

interface SectionProps {
	children: React.ReactNode
	delay?: number
	id: string
}

const Section = ({ children, delay = 0, id }: SectionProps) => (
	<StyledDiv
		initial={{ y: 10, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.8, delay }}
		my={6}
		id={id}
	>
		{children}
	</StyledDiv>
)

export default Section
