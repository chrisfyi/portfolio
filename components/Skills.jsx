import Image from 'next/image'
import React from 'react'
import js from '../public/assets/skills/js.png'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import react from '../public/assets/skills/react.png'
import next from '../public/assets/skills/next-js.png'
import tailwind from '../public/assets/skills/tailwind.png'
import postgre from '../public/assets/skills/postgres.png'
import node from '../public/assets/skills/node.png'
// import skills from '../public/assets/skills'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#B3995D]'>Skills</p> 
            <h2 className='py-4'>Tech I Use</h2> 
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={js}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={html}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={css}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={react}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={next}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Next JS</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={tailwind}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind CSS</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={postgre}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>PostgreSQL</h3>
                    </div>
                </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                            src={node}
                            alt=''
                            width='64'
                            height='64'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Node</h3>
                    </div>
                </div>
                </div>
            
            </div>  
        </div>    
    </div>
  )
}

export default Skills