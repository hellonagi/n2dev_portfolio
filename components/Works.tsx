import { Box, Flex, Heading, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import Paragraph from './Paragraph'
import Section from './Section'
import Image from 'next/image'
import React from 'react'
import styles from './Works.module.css'

const Works = () => {
	const lazyRoot = React.useRef(null)

	return (
		<Section delay={0.2} id='works'>
			<Heading as='h2' size='md' letterSpacing={'tighter'}>
				Works
			</Heading>
			<LinkBox
				mt={4}
				p={2}
				rounded='md'
				as='article'
				bg={useColorModeValue('#eee', '#333')}
				_hover={{ bg: useColorModeValue('#eaeaea', '#2c2c2c') }}
			>
				<Flex>
					<Box lineHeight={0}>
						<Image
							lazyRoot={lazyRoot}
							src='/images/dcafe.png'
							width={96}
							height={96}
							layout='fixed'
							alt='Discord Cafe'
							className={styles.thumb}
						/>
					</Box>

					<Box p={1} ml={2} position='relative'>
						<Heading as='h3' size='xs' letterSpacing={'tighter'}>
							<LinkOverlay href='https://discordcafe.app'>Discord Cafe</LinkOverlay>
						</Heading>
						<p>音声通話アプリDiscordのサーバー宣伝やフレンド募集ができるユーザー投稿型サイト</p>
						<small className={styles.wt}>Webアプリ</small>
					</Box>
				</Flex>
			</LinkBox>
		</Section>
	)
}

export default Works
