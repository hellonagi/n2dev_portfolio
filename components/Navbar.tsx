import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
	useStyleConfig,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleButton from './utils/ToggleButton'

const Navbar = () => {
	return (
		<Box
			position='fixed'
			as='nav'
			w='100%'
			bg={useColorModeValue('#ffffff40', '#20202380')}
			css={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
		>
			<Container
				display='flex'
				p={2}
				position='relative'
				justifyContent='center'
				alignItems='center'
			>
				<Link as={NextLink} href='/' color={useColorModeValue('gray200', 'whiteAlpha.900')}>
					<Heading as='h1' size='lg' letterSpacing={'tighter'} textAlign='center'>
						n2dev
					</Heading>
				</Link>

				{/* <Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems='center'
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<NLink p={2} href='#skills'>
						Skills
					</NLink>
					<NLink p={2} href='#works'>
						Works
					</NLink>
					<NLink p={2} href='#contact'>
						Contact
					</NLink>
				</Stack> */}

				<Box flex={1} position='absolute' right={2}>
					<ToggleButton />

					{/* <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu isLazy id='navbar-menu'>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant='outline'
								aria-label='Options'
							/>
							<MenuList>
								<MenuItem as={Link} href='/#skills'>
									Skills
								</MenuItem>
								<MenuItem as={Link} href='#works'>
									Works
								</MenuItem>
								<MenuItem as={Link} href='#contact'>
									Contact
								</MenuItem>
							</MenuList>
						</Menu>
					</Box> */}
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar
