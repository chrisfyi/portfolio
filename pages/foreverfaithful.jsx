/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image'
import React from 'react'
import niners from '../public/assets/projects/niners.png'
import {RiRadioButtonFill} from 'react-icons/ri'

import {FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import { AiTwotoneApi } from 'react-icons/ai'
import Link from 'next/link'

import niner1 from '../public/assets/projects/niners.png'
import niner2 from '../public/assets/projects/niners2.png'
import niner3 from '../public/assets/projects/niners3.png'
import niner4 from '../public/assets/projects/niners4.png'


const youtubeclone = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
           <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />    
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={niners} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2 text-[#B3995D]'>49ver Faithful</h2>
                <h3>Typescript / Tailwind CSS / Sanity io </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>A 49ers focused blog built with TypeScript and styled with Tailwind CSS. I implented the Sanity io NextJS tool to create the blog and used the Studio to manage the content. The Sanity io CMS makes it really easy to add other users as admins to create content and dynamically update the site. I deployed this project using Vercel.</p>
                <Link href='https://49verfaithful-chrisfyi.vercel.app'>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </Link>
                <Link href='https://github.com/chrisfyi/49verfaithful'>
                <button className='px-8 py-2 mt-4 '>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-black py-2 flex items-center'>
                         <SiTypescript
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Typescript
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <SiTailwindcss
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Tailwind CSS 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <RiRadioButtonFill
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Sanity io 
                        </p>
                        <p className='text-black py-2 flex items-center'>
                         <SiVercel
                         className='pr-1 w-6 h-6 text-[#B3995D]' /> Vercel
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
                    <Image className='rounded-xl group-hover:opacity-20' src={niner1} alt='net1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={niner2} alt='net1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={niner3} alt='net1'  />
                    <Image className='rounded-xl group-hover:opacity-20' src={niner4} alt='net1'  />
                </div>
            </div>   
    </div>
  )
}

export default youtubeclone