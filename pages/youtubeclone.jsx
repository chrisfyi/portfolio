/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image'
import React from 'react'
import youtube from '../public/assets/projects/youtube.png'
import {RiRadioButtonFill, RiReactjsFill} from 'react-icons/ri'

import {FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiMaterialui, SiFirebase } from 'react-icons/si'
import { AiTwotoneApi } from 'react-icons/ai'
import Link from 'next/link'

import yt1 from '../public/assets/projects/yt1.png'
import yt2 from '../public/assets/projects/yt2.png'
import yt3 from '../public/assets/projects/yt3.png'
import yt4 from '../public/assets/projects/yt4.png'


const youtubeclone = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
           <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />    
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={youtube} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2 text-[#B3995D]'>Youtube Clone</h2>
                <h3>React JS / CSS / Firebase / Axios </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>A fully functional Youtube clone that allows you to search and play videos from Youtube. Built with React, styled with Material UI and made Axios calls to the RapidApi database. Served and Hosted on firebase.</p>
                <Link href='https://yt-clone-9f568.web.app/'>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </Link>
                <Link href='https://github.com/chrisfyi/youtube_clone'>
                <button className='px-8 py-2 mt-4 '>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-black py-2 flex items-center'>
                         <FaReact
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> React 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <SiMaterialui
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Material UI 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <AiTwotoneApi
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Axios 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <SiFirebase
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Firebase 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <AiTwotoneApi
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Rapid API
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>  
        <div className='w-full'>
                <div className='max-w-[1240px] mx-auto px-2 py-16'>
                    <Image className='rounded-xl group-hover:opacity-20' src={yt1} alt='yt1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={yt2} alt='yt2'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={yt3} alt='yt3'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={yt4} alt='yt4'  />
                </div>
            </div>   
    </div>
  )
}

export default youtubeclone