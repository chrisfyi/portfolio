/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import icon from '/Users/chrisfyi/Desktop/Portfolio/portfolio-23/public/assets/icon.jpeg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import ParticlesComponent from './Particles'

const Main = () => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Chris",
            "I'm a Front-End Web Developer",
            "Welcome to my portfolio!"

        ],
        loop: true,
        delaySpeed:2000,
    })
  return (
    <div id='home' className='w-full h-screen text-center'>
        <ParticlesComponent />
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                 <Image className='relative rounded-full h-32 w-32 mx-auto object-cover my-4' src={icon} alt='profile icon' width='50'
                height='50'/>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets Build Something Together</p>
                <h1 className='py-4 text-gray-800 font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#B3995D' />
                </h1>
               
                
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a front-end web developer specializing in building fluid and robust web applications. Currently, I'm focused on building responsive front-end web applications as I continue to refine my back-end tech skills.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
             
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-black text-[#B3995D] '>
                        <a target="_blank" href="https://linkedin.com/in/chrisj117" rel="noopener noreferrer">
                            <FaLinkedinIn /> 
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-black text-[#B3995D]'>
                        <a target="_blank" href="https://github.com/chrisfyi" rel="noopener noreferrer">
                            <FaGithub /> 
                        </a> 
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-black text-[#B3995D]'>
                        <a href={`mailto:chrisfyi@hotmail.com`}>
                            <AiOutlineMail /> 
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Main