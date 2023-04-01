/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense } from 'react'
import { Box } from '@chakra-ui/react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { random } from 'maath'

const Stars = () => {
	const ref = useRef<any>(null)
	const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 1.2 }))

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10
		ref.current.rotation.y -= delta / 15
	})

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled>
				<PointMaterial
					transparent
					color='#f262c8'
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	)
}

const StarsCanvas = () => {
	return (
		<Box w='100%' h='auto' position='absolute' zIndex={-1} inset={0}>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</Box>
	)
}

export default StarsCanvas
