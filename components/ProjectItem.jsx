import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ProjectItem = ({title, backgroundImg, projectUrl, type}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-black/90 hover:scale-105 ease-in duration-300'>
    <Image className='rounded-xl group-hover:opacity-20' src={backgroundImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-[#B3995D] tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2  text-center text-white'>{type}</p>
        <Link href={projectUrl} >
        <p className='text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem