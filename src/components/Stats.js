import React from 'react'
import Biography from './Biography'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/profile-pic-2.jpeg';
import Exp from './Exp';
import AnimatedText from './AnimatedText';

/**
 * Statistics Component for the Biography section
 * @returns React functional component
 */
const Stats = () => {
    return (
        <div>
            <AnimatedText text='Passion Fuels Purpose!' className='mb-12'></AnimatedText>
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
        </div>
    )
}

export default Stats