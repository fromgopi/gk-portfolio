import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import profilePic from '../../public/images/profile/dev-pic-2-bn.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='flex items-center text-dark w-full min-h-screen'>
			<Layout className='pt-0'>
				<div className='flex items-center justify-between w-full'>
					<div className='w-1/2'>
						<Image src={profilePic} alt='Oscarmild' className='w-full h-auto' />
					</div>
					{/* Intro section */}
					<div className='w-1/2 flex flex-col items-center self-center'>
						<AnimatedText text="Turning Vision Into Reality With Code And Design."
							className='!text-5xl !text-left'
						/>
						<p className='my-4 text-base font-medium'>
							As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
							Explore my latest projects and articles, showcasing my expertise in React.js and web development.
						</p>
						{/* Resume section */}
						<div className='flex items-center self-start mt-2'>
						<Link href="/dummy.pdf" target={'_blank'}
							className='flex items-center bg-dark text-light p-2.5 px-6
							rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
							border-2 border-solid border-transparent hover:border-red-700'
							download={true}
						>Resume <LinkArrow className={`w-6 ml-1`}/></Link>
						<Link href="mailto:muktevigk@oscarmild.me" target={'_blank'}>Contact</Link>
					</div>
					</div>
				</div>
			</Layout>
		</main>
	)
}
