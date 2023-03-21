import { Box, Flex, Heading, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import Paragraph from './Paragraph'
import Section from './Section'
import Image from 'next/image'
import React from 'react'
import styles from './Works.module.css'

const Works = () => {
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
							src='/images/yacht.png'
							width={96}
							height={96}
							alt='Yacht Dice'
							className={styles.thumb}
						/>
					</Box>

					<Box p={1} ml={2} position='relative'>
						<Heading as='h3' size='xs' letterSpacing={'tighter'}>
							<LinkOverlay
								href='https://play.google.com/store/apps/details?id=com.n2dev.YachtDice'
								target='_blank'
								rel='noopener noreferrer'
							>
								ヨット
							</LinkOverlay>
						</Heading>
						<p>5つのサイコロを振って、その組み合わせから役を作り、高得点を競うボードゲーム</p>
						<small className={styles.wt}>Androidアプリ</small>
					</Box>
				</Flex>
			</LinkBox>

			<LinkBox
				mt={2}
				p={2}
				rounded='md'
				as='article'
				bg={useColorModeValue('#eee', '#333')}
				_hover={{ bg: useColorModeValue('#eaeaea', '#2c2c2c') }}
			>
				<Flex>
					<Box lineHeight={0}>
						<Image
							src='/images/dcafe.png'
							width={96}
							height={96}
							alt='Discord Cafe'
							className={styles.thumb}
						/>
					</Box>

					<Box p={1} ml={2} position='relative'>
						<Heading as='h3' size='xs' letterSpacing={'tighter'}>
							<LinkOverlay href='https://discordcafe.app' target='_blank' rel='noopener noreferrer'>
								Discord Cafe
							</LinkOverlay>
						</Heading>
						<p>音声通話アプリDiscordのサーバー宣伝やフレンド募集ができるユーザー投稿型サイト</p>
						<small className={styles.wt}>Webアプリ</small>
					</Box>
				</Flex>
			</LinkBox>

			<LinkBox
				mt={2}
				p={2}
				rounded='md'
				as='article'
				bg={useColorModeValue('#eee', '#333')}
				_hover={{ bg: useColorModeValue('#eaeaea', '#2c2c2c') }}
			>
				<Flex>
					<Box lineHeight={0}>
						<Image
							src='/images/qdict.png'
							width={96}
							height={96}
							alt='一括英単語検索'
							className={styles.thumb}
						/>
					</Box>

					<Box p={1} ml={2} position='relative'>
						<Heading as='h3' size='xs' letterSpacing={'tighter'}>
							<LinkOverlay
								href='https://chrome.google.com/webstore/detail/%E4%B8%80%E6%8B%AC%E8%8B%B1%E5%8D%98%E8%AA%9E%E6%A4%9C%E7%B4%A2/hppoficilhdedjgledncaoknmgfejaoi'
								target='_blank'
								rel='noopener noreferrer'
							>
								一括英単語検索
							</LinkOverlay>
						</Heading>
						<p>
							ブラウザ上の英単語をダブルクリックすることで指定した辞書サイトを一括で開くことができるChrome拡張
						</p>
						<small className={styles.wt}>Chrome拡張</small>
					</Box>
				</Flex>
			</LinkBox>

			<LinkBox
				mt={2}
				p={2}
				rounded='md'
				as='article'
				bg={useColorModeValue('#eee', '#333')}
				_hover={{ bg: useColorModeValue('#eaeaea', '#2c2c2c') }}
			>
				<Flex>
					<Box lineHeight={0}>
						<Image
							src='/images/crmap.jpg'
							width={96}
							height={96}
							alt='新型コロナウイルス感染症マップ'
							className={styles.thumb}
						/>
					</Box>

					<Box p={1} ml={2} position='relative'>
						<Heading as='h3' size='xs' letterSpacing={'tighter'}>
							<LinkOverlay
								href='https://youtu.be/FeLgkuqB8UI'
								target='_blank'
								rel='noopener noreferrer'
							>
								新型コロナウイルス感染症マップ
							</LinkOverlay>
						</Heading>
						<p>2020年初旬の新型コロナウイルスの感染者数を可視化したマップ</p>
						<small className={styles.wt}>p5.js</small>
					</Box>
				</Flex>
			</LinkBox>
		</Section>
	)
}

export default Works
