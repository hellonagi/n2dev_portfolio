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
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleButton from './ToggleButton'

function NLink(props: any) {
	const styles = useStyleConfig('Link', props)

	return (
		<Link
			sx={{
				color: useColorModeValue('gray200', 'whiteAlpha.900'),
			}}
			__css={{
				...styles,
			}}
			{...props}
		/>
	)
}

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
			<Container display='flex' p={2} maxW='container.md'>
				<Flex textAlign='center' mr={5}>
					<Heading as='h1' size='lg' letterSpacing={'tighter'}>
						n2dev
					</Heading>
				</Flex>

				<Stack
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
				</Stack>

				<Box flex={1} textAlign='right'>
					<ToggleButton />

					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu isLazy id='navbar-menu'>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant='outline'
								aria-label='Options'
							/>
							<MenuList>
								<MenuItem as={Link} href='#skills'>
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
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar
