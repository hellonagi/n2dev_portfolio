import { useState } from 'react'
import {
	Box,
	Flex,
	Heading,
	LinkBox,
	LinkOverlay,
	useColorModeValue,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import Paragraph from './utils/Paragraph'
import Section from './Section'
import Image from 'next/image'
import React from 'react'
import styles from './Works.module.css'
import { projects } from '../constants'
import Link from 'next/link'
import ProjectModal from './projects/ProjectModal'

const Projects = () => {
	const bgColor = useColorModeValue('#eee', '#333')
	const hoverBgColor = useColorModeValue('#eaeaea', '#2c2c2c')

	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
	)

	const OverlayTwo = () => (
		<ModalOverlay bg='none' backdropFilter='auto' backdropInvert='80%' backdropBlur='2px' />
	)

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = useState(<OverlayOne />)
	const [projectIndex, setProjectIndex] = useState(0)

	return (
		<Section delay={0.2} id='projects'>
			<Heading as='h2' size='md' letterSpacing={'tighter'}>
				Projects
			</Heading>

			{projects.map((project, index) => (
				<Box
					key={project.name}
					mt={2}
					p={2}
					rounded='md'
					as='article'
					cursor='pointer'
					bg={bgColor}
					_hover={{ bg: hoverBgColor }}
					onClick={() => {
						setProjectIndex(index)
						setOverlay(<OverlayOne />)
						onOpen()
					}}
				>
					<Flex>
						<Box lineHeight={0}>
							<Image
								src={`/images/${project.image}`}
								width={96}
								height={96}
								alt='Yacht Dice'
								className={styles.thumb}
							/>
						</Box>

						<Box p={1} ml={2} position='relative'>
							<Heading as='h3' size='xs' letterSpacing={'tighter'}>
								{project.title}
							</Heading>
							<p>{project.description}</p>
							<small className={styles.wt}>{project.category}</small>
						</Box>
					</Flex>
				</Box>
			))}
			<ProjectModal
				isOpen={isOpen}
				onClose={onClose}
				overlay={overlay}
				projectIndex={projectIndex}
			/>
		</Section>
	)
}

export default Projects
