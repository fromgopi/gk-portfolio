import React from 'react'

const AnimatedText = ({text, className=''}) => {
    const span = text.split(" ").map((word, index) => {
        return (
            <span key={word+'-'+index}
                className='inline-block'
            >
                {word}&nbsp;
            </span>
        )
    })
    return (
        <div className='w-full mx-auto py-2 items-center 
                justify-center text-center overflow-hidden'>
            <h1 className={`w-full text-dark font-bold capitalize text-8xl ${className}`}>{span}</h1>
        </div>
    )
}

export default AnimatedText