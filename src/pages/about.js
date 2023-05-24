import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ProfilePic from '../../public/images/profile/profile-pic-2.jpeg'
import Exp from '@/components/Exp'
import Biography from '@/components/Biography'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

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
                    
                    {/* Profie, Stats, etc */}
                    <div className='grid w-full grid-cols-8 gap-16'>
                        {/* Biography  */}
                        <Biography />

                        {/* Profile Pic div */}
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                            <Image alt='Oscarmild-Profile' src={ProfilePic} className='w-full h-auto rounded-2xl'/>
                        </div>

                        {/* Experience Div */}
                        <div className='col-span-2 flex flex-col space-y-2 items-end justify-between'>
                            <Exp/>
                        </div>
                    </div>
                    {/* End of Profile section */}

                    {/* Skills section start */}
                    <Skills />
                    {/* End of Skills Section */}
                    {/* Start of Exp section */}
                    <Experience/>
                    {/* End of Exp section */}
                    {/* Start of Education */}
                    <Education />
                    {/* End of Education */}
                </Layout>
            </main>
        </>
    )
}

export default about