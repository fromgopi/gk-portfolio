import React from 'react'
import { motion } from 'framer-motion';
import Experience from './Experience';

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center 
                rounded-full font-semibold  bg-black text-light py-3 px-6
                shadow-dark cursor-move absolute'
                whileHover={{scale:1.03}}
                initial={{x:0,y:0}}
                whileInView={{x:x, y:y}}
                transition={{duration: 1.5}}
                viewport={{once:true}}
            >
                    {name}
            </motion.div>
    )
}

const Skills = () => {
    return (
        <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skill</h2>
        <div className='w-full h-screen relative flex items-center 
            justify-center rounded-full bg-circularLight'>
            <Skill name='Web' x="0vw" y="0vw" />
            <Skill name='HTML' x="-22vw" y="2vw" />
            <Skill name='SpringBoot' x="20vw" y="6vw" />
            <Skill name='React' x="0vw" y="12vw" />
            <Skill name='Nextjs' x="-20vw" y="-15vw" />
            <Skill name='Django' x="15vw" y="-12vw" />
            <Skill name='Apache Airflow' x="32vw" y="-5vw" />
            <Skill name='Spark' x="0vw" y="-20vw" />
            <Skill name='Firebase' x="-25vw" y="19vw" />
            <Skill name='go' x="18vw" y="18vw" />
            
        </div>
        <div>
            <Experience />
        </div>
        </>
    )
}

export default Skills