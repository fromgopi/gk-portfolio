import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import profilePic from '../../public/images/profile/dev-pic-2-bn.png';
import AnimatedText from '@/components/AnimatedText';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='flex items-center text-dark w-full min-h-screen'>
			<Layout className='pt-0'>
				<div className='flex items-center justify-between w-full'>
					<div className='w-1/2'>
						<Image src={profilePic} alt='Oscarmild' className='w-full h-auto' />
					</div>
					<div className='w-1/2 flex flex-col items-center self-center'>
						<AnimatedText text="Turning Vision Into Reality With Code And Design."
							className='!text-5xl !text-left'
						/>
						<p>
							As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
							Explore my latest projects and articles, showcasing my expertise in React.js and web development.
						</p>
					</div>
				</div>
			</Layout>
		</main>
	)
}
