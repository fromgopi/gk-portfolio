import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import profilePic from '../../public/images/profile/dev-pic-2-bn.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='flex items-center text-dark w-full min-h-screen'>
			<Layout className='pt-0'>
				<div className='flex items-center justify-between w-full'>
					<div className='w-1/2'>
						<Image src={profilePic} alt='Oscarmild' className='w-full h-auto' />
					</div>
				</div>
			</Layout>
		</main>
	)
}
