import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 boder-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>©2023 OS</span>
                <Link href='/'>Oscarmild.me</Link>
                <Link href='/'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer