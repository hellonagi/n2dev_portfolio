import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				style={{ display: 'inline-block' }}
				key={useColorModeValue('light', 'dark')}
				initial={{ rotate: -180, scale: 0, opacity: 0 }}
				animate={{ rotate: 0, scale: 1, opacity: 1 }}
				exit={{ rotate: 180, scale: 0, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<IconButton
					aria-label='Toggle theme'
					colorScheme={useColorModeValue('blackAlpha', 'gray')}
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
					onClick={toggleColorMode}
				></IconButton>
			</motion.div>
		</AnimatePresence>
	)
}

export default ThemeToggleButton
