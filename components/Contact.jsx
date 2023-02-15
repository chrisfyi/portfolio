/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaLinkedinIn , FaGithub, FaPhone, FaCalendarAlt} from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone, AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'


  import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link';
  
const Contact = () => {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#B3995D]">Contact</p>
        <h2 className="py-4">Let's Build Something Together</h2>
        <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className='lg:p-4 h-full rounded-xl'>
                <div>
                    <img className='rounded-xl hover:scale-105 ease-in duration-300'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqsARBKawbjehQ58JvlY6tjAgdXDA0z8Xdw&usqp=CAU" alt="" />
                </div>
                <div>
                    <h2 className='py-2'>Chris Jones</h2>
                    <p>Front-End Developer</p>
                    <p className='py-4'>I am available for part-time, full-time or freelance positions. Contact me and let's talk.</p>
                </div>

                <div>
                    <p className='uppercase pt-8'>Connect With Me</p>
                    <div className='flex items-center justify-between py-4'>
                        
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-black text-[#B3995D]'>
                            <a href={`sms:${9095671496}`}>
                                <AiOutlinePhone />
                            </a>
                        </div>
                        
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-black text-[#B3995D]'>
                           <a href={`mailto:chrisfyi@hotmail.com`}>
                                <AiOutlineMail /> 
                            </a>
                        </div>

                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-black text-[#B3995D]">
                            <a href="https://calendly.com/chrisjdev/introductory-meeting">
                                <AiOutlineCalendar />
                            </a>
                        </div>

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
                   

                    </div>
                </div>
            </div>
                </div>
            {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form action="">
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                    type="text"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Number</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input 
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type="email"
                            />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input 
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type="text"
                            />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                        </div>
                        <button className='w-full p-4 text-[#B3995D] mt-4'>Send Message</button>
                    </form>
                </div>
                </div> 
            </div>
        
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-black text-[#B3995D]'>
                      <HiOutlineChevronDoubleUp size={20} />  
                    </div>
                </Link>
            </div>
        
      </div>
    </div>
  )
}

export default Contact