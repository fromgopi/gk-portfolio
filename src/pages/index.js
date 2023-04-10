import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='flex  items-center text-dark w-full min-h-screen'>
			Home
		</main>
	)
}
