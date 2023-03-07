import { Heading, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import Paragraph from './Paragraph'
import Section from './Section'

const PrivacyPolicy = () => {
	return (
		<Section id='privacy-policy'>
			<Heading as='h2' size='md' letterSpacing={'tighter'}>
				Privacy Policy
			</Heading>
			<Paragraph>
				n2dev built the Yacht Dice app as an Ad Supported app. This SERVICE is provided by n2dev at
				no cost and is intended for use as is. This page is used to inform visitors regarding my
				policies with the collection, use, and disclosure of Personal Information if anyone decided
				to use my Service. If you choose to use my Service, then you agree to the collection and use
				of information in relation to this policy. The Personal Information that I collect is used
				for providing and improving the Service. I will not use or share your information with
				anyone except as described in this Privacy Policy. The terms used in this Privacy Policy
				have the same meanings as in our Terms and Conditions, which are accessible at Yacht Dice
				unless otherwise defined in this Privacy Policy.
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Information Collection and Use
			</Heading>
			<Paragraph>
				For a better experience, while using our Service, I may require you to provide us with
				certain personally identifiable information. The information that I request will be retained
				on your device and is not collected by me in any way. The app does use third-party services
				that may collect information used to identify you. Link to the privacy policy of third-party
				service providers used by the app
			</Paragraph>
			<UnorderedList mt={2}>
				<ListItem>
					<Link
						href='https://www.google.com/policies/privacy/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Google Play Services
					</Link>
				</ListItem>
				<ListItem>
					<Link
						href='https://support.google.com/admob/answer/6128543?hl=en'
						target='_blank'
						rel='noopener noreferrer'
					>
						AdMob
					</Link>
				</ListItem>
				<ListItem>
					<Link
						href='https://unity3d.com/legal/privacy-policy'
						target='_blank'
						rel='noopener noreferrer'
					>
						Unity
					</Link>
				</ListItem>
			</UnorderedList>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Log Data
			</Heading>
			<Paragraph>
				I want to inform you that whenever you use my Service, in a case of an error in the app I
				collect data and information (through third-party products) on your phone called Log Data.
				This Log Data may include information such as your device Internet Protocol (“IP”) address,
				device name, operating system version, the configuration of the app when utilizing my
				Service, the time and date of your use of the Service, and other statistics.
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Cookies
			</Heading>
			<Paragraph>
				Cookies are files with a small amount of data that are commonly used as anonymous unique
				identifiers. These are sent to your browser from the websites that you visit and are stored
				on your device&apos;s internal memory. This Service does not use these “cookies” explicitly.
				However, the app may use third-party code and libraries that use “cookies” to collect
				information and improve their services. You have the option to either accept or refuse these
				cookies and know when a cookie is being sent to your device. If you choose to refuse our
				cookies, you may not be able to use some portions of this Service.
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Service Providers
			</Heading>
			<Paragraph>
				I may employ third-party companies and individuals due to the following reasons:
			</Paragraph>
			<UnorderedList mt={2}>
				<ListItem>To facilitate our Service;</ListItem>
				<ListItem>To provide the Service on our behalf;</ListItem>
				<ListItem>To perform Service-related services; or</ListItem>
				<ListItem>To assist us in analyzing how our Service is used.</ListItem>
			</UnorderedList>
			<Paragraph>
				I want to inform users of this Service that these third parties have access to their
				Personal Information. The reason is to perform the tasks assigned to them on our behalf.
				However, they are obligated not to disclose or use the information for any other purpose.
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Security
			</Heading>
			<Paragraph>
				I value your trust in providing us your Personal Information, thus we are striving to use
				commercially acceptable means of protecting it. But remember that no method of transmission
				over the internet, or method of electronic storage is 100% secure and reliable, and I cannot
				guarantee its absolute security.
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Links to Other Sites
			</Heading>
			<Paragraph>
				This Service may contain links to other sites. If you click on a third-party link, you will
				be directed to that site. Note that these external sites are not operated by me. Therefore,
				I strongly advise you to review the Privacy Policy of these websites. I have no control over
				and assume no responsibility for the content, privacy policies, or practices of any
				third-party sites or services.
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Children’s Privacy
			</Heading>
			<Paragraph>
				These Services do not address anyone under the age of 13. I do not knowingly collect
				personally identifiable information from children under 13 years of age. In the case I
				discover that a child under 13 has provided me with personal information, I immediately
				delete this from our servers. If you are a parent or guardian and you are aware that your
				child has provided us with personal information, please contact me so that I will be able to
				do the necessary actions.
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Changes to This Privacy Policy
			</Heading>
			<Paragraph>
				I may update our Privacy Policy from time to time. Thus, you are advised to review this page
				periodically for any changes. I will notify you of any changes by posting the new Privacy
				Policy on this page. This policy is effective as of 2023-03-01
			</Paragraph>
			<Heading as='h2' size='md' letterSpacing={'tighter'} mt={4}>
				Contact Us
			</Heading>
			<Paragraph>
				If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact
				me at ntwo.dev@gmail.com.
			</Paragraph>
		</Section>
	)
}

export default PrivacyPolicy
