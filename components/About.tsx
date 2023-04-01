import { Heading, Text, Stack, useColorModeValue, UnorderedList, ListItem } from '@chakra-ui/react'
import Section from './utils/Section'

const About = () => {
	const bgColor = useColorModeValue('#eee', '#333')

	return (
		<Section id='about'>
			<Heading as='h2' size='md' letterSpacing={'tighter'} my={2}>
				About
			</Heading>
			<Stack spacing={2} bg={bgColor} p={4} rounded='md'>
				<Text fontSize='sm'>見てくださってありがとうございます。</Text>
				<Text fontSize='sm'>
					独学でWeb開発やゲーム開発をしているNagiといいます。現在はReact、Express、MySQLを使ったプロジェクトに情熱を持って取り組んでいます。目標はユーザー数1万人以上のプロジェクトに携わることです。
				</Text>
				<br />
				<Text fontSize='sm'>簡単なプログラミング歴</Text>
				<UnorderedList listStyleType='none'>
					<ListItem>[2019-2020] AtCoderで競技プログラミングに嵌まる(Python, 緑色)</ListItem>
					<ListItem>[2021] Chrome拡張機能を制作(JavaScript)</ListItem>
					<ListItem>[2022] 外部APIを使用したWebアプリを制作(React, Express, MySQL)</ListItem>
					<ListItem>[2023] Unityでゲームを作りGoogle Playストアで公開(C#)</ListItem>
				</UnorderedList>
			</Stack>
		</Section>
	)
}

export default About
