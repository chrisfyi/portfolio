/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image'
import React from 'react'
import youtube from '../public/assets/projects/youtube.png'
import {RiRadioButtonFill, RiReactjsFill} from 'react-icons/ri'

import {FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase } from 'react-icons/si'
import { AiTwotoneApi } from 'react-icons/ai'
import Link from 'next/link'


const youtubeclone = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
           <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />    
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={youtube} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Youtube Clone</h2>
                <h3>React JS / CSS / Firebase / Axios </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>A fully functional Youtube clone that allows you to search and play videos from Youtube. Built with React, styled with Material UI and made Axios calls to the RapidApi database. Served and Hosted on firebase..</p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4 '>Code</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <FaReact
                         className='pr-1 w-6 h-6' /> React 
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <FaCss3Alt
                         className='pr-1 w-6 h-6' /> CSS 
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <SiTailwindcss
                         className='pr-1 w-6 h-6' /> Tailwind 
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <SiFirebase
                         className='pr-1 w-6 h-6' /> Firebase 
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                         <AiTwotoneApi
                         className='pr-1 w-6 h-6' /> Rapid API
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>    
    </div>
  )
}

export default youtubeclone