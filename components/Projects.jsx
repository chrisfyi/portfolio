/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import netflix from '../public/assets/projects/netflix.png'
import youtube from '../public/assets/projects/youtube.png'
import newsocial from '../public/assets/projects/newsocial4.png'
import niners from '../public/assets/projects/niners.png'

import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#B3995D]'>Projects</p>
            <h2 className='py-4'>Apps I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title="Netflix Clone"
                    backgroundImg={netflix}
                    projectUrl='/netflixclone'
                    type='React JS'  
                />
                <ProjectItem 
                    title="Youtube Clone"
                    backgroundImg={youtube}
                    projectUrl='/youtubeclone'
                    type='React JS' 
                />
                  <ProjectItem
                    title='49ver Faithful Blog'
                    backgroundImg={niners}
                    projectUrl='/foreverfaithful'
                    type='TypeScript'
                />
                <ProjectItem 
                    title="NewSocial"
                    backgroundImg={newsocial}
                    projectUrl='/newsocial'
                    type='MERN Stack' 
                />
              
            </div>
        </div>
    </div>
  )
}

export default Projects