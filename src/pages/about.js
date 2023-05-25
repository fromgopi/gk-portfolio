import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Stats from '@/components/Stats'

const about = () => {
    return (
        <>
            <Head>
                <title>Oscarmild | About</title>
                <meta name='description' content='About page of Oscarmild'></meta>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>                    
                    {/* Profie, Stats, etc */}
                    <Stats/>
                    {/* End of Stats section */}
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