import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const AnimatedNumber = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000 })
    const isInView = useInView({ref})
    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return(
        <span>

        </span>
    )
}

const Experience = () => {
    return (
        <>
        <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
                2+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>Startup Experience</h2>
        </div>
        <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
                40+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>Projects completed</h2>
        </div>
        <div className='flex flex-col items-end justify-center '>
            <span className='inline-block text-7xl font-bold'>
                5+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>
        </div>
        </>
    )
}

export default Experience