import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const AnimatedNumber = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000 })
    const isInView = useInView(ref, {once: true})
    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) < value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return(
        <span ref={ref}></span>
    )
}

const Experience = () => {
    return (
        <>
        <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber value={3} />+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>Startup Experience</h2>
        </div>
        <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber value={41} />+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>Projects completed</h2>
        </div>
        <div className='flex flex-col items-end justify-center '>
            <span className='inline-block text-7xl font-bold'>
                <AnimatedNumber value={7} />+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>
        </div>
        </>
    )
}

export default Experience

