/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image'
import React from 'react'
import netflixBanner from '../public/assets/projects/netflixbanner.jpg'
import {RiRadioButtonFill, RiReactjsFill} from 'react-icons/ri'

import {FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase } from 'react-icons/si'
import { AiTwotoneApi } from 'react-icons/ai'
import Link from 'next/link'

import net1 from '../public/assets/projects/net1.png'
import net2 from '../public/assets/projects/net2.png'
import net3 from '../public/assets/projects/net3.png'
import net4 from '../public/assets/projects/net4.png'


const netflixclone = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
           <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />    
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={netflixBanner} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2 text-[#B3995D]'>Netflix Clone</h2>
                <h3>React JS / CSS / Firebase </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>A front-end clone of Netflix built from scratch using React.js. I used CSS for the UI and UX. State management was handled using redux. Authentication is done using the firebase authentication platform and hosted with firebase hosting. The API I pulled from was TMDB using Axios Calls.</p>
                <Link href='https://netflix-clone-b86e4.web.app/'>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </Link>
                <Link href='https://github.com/chrisfyi/netflix_clone'>
                <button className='px-8 py-2 mt-4 '>Code</button>
                </Link>
                
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='underline'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-black py-2 flex items-center'>
                         <FaReact
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> React 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <FaCss3Alt
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> CSS 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <SiFirebase
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Firebase 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <AiTwotoneApi
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Axios
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
                    <Image className='rounded-xl group-hover:opacity-20' src={net1} alt='net1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={net2} alt='net1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={net3} alt='net1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={net4} alt='net1'  />
                </div>
            </div> 
           
    </div>
  )
}

export default netflixclone