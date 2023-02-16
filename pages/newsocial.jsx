/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image'
import React from 'react'
import newsocialimg from '../public/assets/projects/newsocial4.png'
import {RiRadioButtonFill, RiReactjsFill} from 'react-icons/ri'

import {FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMaterialui, SiMongodb, SiExpress } from 'react-icons/si'
import { AiTwotoneApi } from 'react-icons/ai'
import Link from 'next/link'

import ns1 from '../public/assets/projects/newsocial1.png'
import ns2 from '../public/assets/projects/newsocial2.png'
import ns3 from '../public/assets/projects/newsocial3.png'
import ns4 from '../public/assets/projects/newsocial4.png'


const newsocial = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
           <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />    
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={newsocialimg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2 text-[#B3995D]'>NewSocial</h2>
                <h3>React JS / MongoDB / MaterialUI</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>A responsive Fullstack MERN social media project. Users can register and create their profiles with user images and other user information. On the home and profile page, users can follow other profiles, post pictures, audio and other attachments. I used Material UI for the UI and UX, and allow users to switch between dark and light modes. MongoDB handles the database and json webtoken handles authentication. Demo coming soon!</p>
                {/* <Link href='https://yt-clone-9f568.web.app/'> */}
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                {/* </Link> */}
                <Link href='https://github.com/chrisfyi/social_app'>
                <button className='px-8 py-2 mt-4 '>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-black py-2 flex items-center'>
                         <SiMongodb
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Mongo DB 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <SiExpress
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Express js
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <FaReact
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> React 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <FaNodeJs
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Node js 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <SiMaterialui
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Material UI 
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
                    <Image className='rounded-xl group-hover:opacity-20' src={ns1} alt='yt1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={ns2} alt='yt2'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={ns3} alt='yt3'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={ns4} alt='yt4'  />
                </div>
            </div>    
    </div>
  )
}

export default newsocial