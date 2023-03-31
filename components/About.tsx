import { Box, Heading } from '@chakra-ui/react'
import Paragraph from './utils/Paragraph'
import Section from './Section'

const About = () => {
	return (
		<Section id='about'>
			<Heading as='h2' size='md' letterSpacing={'tighter'}>
				About
			</Heading>
			<Paragraph>
				こんにちは！私は独学でWeb開発を学んだエンジニアです。React、Express、およびMySQLを使ったプロジェクトに情熱を持って取り組んでいます。私の目標は、フルスタックエンジニアとしてスキルを磨き、クライアントやチームに最高のソリューションを提供することです。
			</Paragraph>
			<Paragraph>
				自分自身を常に挑戦し、新しい技術を学ぶことが好きで、これが私が独学でプログラミングを学んだ理由の一つです。その過程で、Reactを使ったフロントエンド開発、Expressを使ったバックエンド開発、そしてMySQLを使ったデータベース管理に習熟しました。
			</Paragraph>
			<Paragraph>
				趣味として、ゲーム開発も行っています。この活動を通じて、プログラミングだけでなく、クリエイティブな発想やチームワークの重要性も学んでいます。私は自分のスキルを活かして、Web開発だけでなくゲーム開発のプロジェクトにも貢献したいと考えています。
			</Paragraph>
			<Paragraph>
				将来的には、フルスタックエンジニアとしてのキャリアを追求し、Web開発とゲーム開発の両方で革新的なプロジェクトに携わりたいと考えています。私はチームの一員として、または個人として、最高品質の成果を提供することに専念しています。どのようなプロジェクトでも、私は最善を尽くし、継続的に学び、成長していくことを約束します。
			</Paragraph>
		</Section>
	)
}

export default About
