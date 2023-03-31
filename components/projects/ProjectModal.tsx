import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	Heading,
	Button,
	Flex,
	Stack,
	Badge,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { projects, tagColorMap } from '../../constants'

interface ProjectModalProp {
	isOpen: boolean
	onClose: () => void
	overlay: JSX.Element
	projectIndex: number
}

const ProjectModal = ({ isOpen, onClose, overlay, projectIndex }: ProjectModalProp) => {
	return (
		<Modal isCentered isOpen={isOpen} onClose={onClose} size='lg' scrollBehavior={'outside'}>
			{overlay}
			<ModalContent>
				<ModalHeader pb={2}>
					<Heading>{projects[projectIndex].title}</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{/* <Flex position='relative' justifyContent='center'> */}
					{projects[projectIndex].youtube ? (
						<iframe
							width='464'
							height='261'
							src={projects[projectIndex].youtube}
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					) : (
						<Image
							src={`/images/${projects[projectIndex].hero}`}
							width={500}
							height={500}
							alt='Yacht Dice'
						/>
					)}

					{/* </Flex> */}
					<Stack direction='row' my={2}>
						{projects[projectIndex].tags?.map((tag: string) => (
							<Badge key={tag} colorScheme={tagColorMap[tag] || 'gray'} variant='solid'>
								{tag}
							</Badge>
						))}
					</Stack>
					<Stack direction='row' my={2}>
						<Button
							as='a'
							href={projects[projectIndex].url}
							target='_blank'
							variant='solid'
							leftIcon={<ExternalLinkIcon />}
						>
							Live App
						</Button>
						{projects[projectIndex].github && (
							<Button
								variant='solid'
								as='a'
								href={projects[projectIndex].github}
								target='_blank'
								leftIcon={
									<Image
										src='/images/social/github-mark-white.png'
										width={16}
										height={16}
										alt='github icon'
									/>
								}
							>
								GitHub
							</Button>
						)}
					</Stack>

					<Heading as='h2' size='md'>
						概要
					</Heading>
					<Text fontSize='sm'>{projects[projectIndex].project_desc}</Text>
					<Heading as='h2' size='md' mt={2}>
						役割
					</Heading>
					<UnorderedList>
						{projects[projectIndex].roles?.map((role) => (
							<ListItem key={role}>{role}</ListItem>
						))}
					</UnorderedList>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default ProjectModal