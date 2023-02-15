/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import snowday from '/Users/chrisfyi/Desktop/Portfolio/portfolio-23/public/assets/snowday.jpeg'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#B3995D]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-700'>I appreciate you being here!</p>
                
                <p className= 'py-2 text-gray-700'>I am a Developer. A few years ago I received a certificate of completion from Fullstack Academy by way of Cal Poly Pomona. This was a rigorous program where I learned fullstack development languages such as Javascript, React, Node and more. I have used the education I received to create fluid and robust fullstack web applications. Up next I intend to put my skills to use in either front-end, back-end or fullstack development. My project portfolio demonstrates a mix of technologies as well as my own creative touch. I have a particular interest in building fluid and responsive front-end applications. I love to learn, am easy to work with, and I work tirelessly to ensure my work is quality material. I look forward to hearing from you!</p>
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
               <Image src={snowday} alt='about pic' />
            </div>
        </div>
    </div>
  )
}

export default About