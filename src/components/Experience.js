import React, { useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const Details = ({position, company, companyLink, time, address, work}) => {
    return(
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>{time} | {address}</span>
                <p className='font-medium w-full'>{work}</p>
            </div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
        }
    );
    console.log(scrollYProgress)
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>
            <div className='w-[75%] mx-auto relative'>
                <div className='absolute left-8 top-0 w-[4px] h-full bg-red-700 origin-top'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Software Engineer" company="Portea"
                        time="2017-2019" address="Bangalore India" companyLink="www.portea.com"
                        work="Worked as software engineer and primarily responsible for developing standalone features which are used to migrate offline business to online"
                    />
                    <Details
                        position="Software Engineer" company="Portea"
                        time="2017-2019" address="Bangalore India" companyLink="www.portea.com"
                        work="Worked as software engineer and primarily responsible for developing standalone features which are used to migrate offline business to online"
                    />
                    <Details
                        position="Software Engineer" company="Portea"
                        time="2017-2019" address="Bangalore India" companyLink="www.portea.com"
                        work="Worked as software engineer and primarily responsible for developing standalone features which are used to migrate offline business to online"
                    />
                    <Details
                        position="Software Engineer" company="Portea"
                        time="2017-2019" address="Bangalore India" companyLink="www.portea.com"
                        work="Worked as software engineer and primarily responsible for developing standalone features which are used to migrate offline business to online"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience