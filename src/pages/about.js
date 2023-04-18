import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ProfilePic from '../../public/images/profile/profile-pic-2.jpeg'
import Experience from '@/components/Experience'

const about = () => {
    return (
        <>
            <Head>
                <title>Oscarmild | About</title>
                <meta name='description' content='About page of Oscarmild'></meta>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passion Fuels Purpose!' className='mb-12'></AnimatedText>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>
                            Hi, I am Gopi Krishna. I am the founder and chairman of Agrigrow Tech Solutions. I was born and raised in India, and after completing my high school education, I pursued my passion for technology by obtaining a bachelors degree in Computer Science from Osmania University.
                            </p>
                            <p className='my-1 font-medium'>
                            As an entrepreneur, I have always been driven by a desire to make a positive impact on the world. I founded Agrigrow Tech Solutions with the vision of revolutionising the agricultural industry and dairy industry through the use of cutting-edge technology.
                            </p>
                            <p className='font-medium'>
                            With my knowledge and experience in the field of computer science, I have been able to create innovative solutions that have helped farmers to increase their crop yields and improve the efficiency of their operations. My commitment to excellence and my passion for technology have been the driving forces behind my success as an entrepreneur. I am always looking for new opportunities to grow and expand my business, and I am constantly striving to stay ahead of the curve in this rapidly evolving industry. If you are looking for a talented and innovative leader who can help take your business to the next level, I would love to hear from you.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                            <Image alt='Oscarmild-Profile' src={ProfilePic} className='w-full h-auto rounded-2xl'/>
                        </div>
                        <div className='col-span-2 flex flex-col space-y-2 items-end justify-between'>
                            <Experience/>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default about