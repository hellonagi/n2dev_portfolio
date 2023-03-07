import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'
import Layout from '../components/Layout'
import PrivacyPolicy from '../components/PrivacyPolicy'

const Privacy: NextPage = () => {
	return (
		<Layout>
			<Container>
				<PrivacyPolicy />
			</Container>
		</Layout>
	)
}

export default Privacy