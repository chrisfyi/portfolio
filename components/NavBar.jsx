/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import cjd from '../public/assets/cjd.png'
import cjdWhite from '../public/assets/CJD-white.png'
import Link from 'next/link'
import { AiOutlineClose , AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Router, useRouter } from 'next/router'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const [logoColor, setLogoColor] = useState(cjd)
    const [burgerColor, setBurgerColor] = useState('black')
    const router = useRouter();

    useEffect(() =>{
        if(
           router.asPath === '/netflixclone' ||
           router.asPath === '/youtubeclone' ||
           router.asPath === '/newsocial'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
            setLogoColor(cjdWhite)
            setBurgerColor('white')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
            setLogoColor(cjd)
            setBurgerColor('black')
        }
    }, [router])


    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div 
        style={{backgroundColor: `${navBg}`}}
        className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>

           <Link href='/'>
                <Image 
                    src={logoColor}
                    alt="logoImage"
                    width='50'
                    height='50'
                />
            </Link> 
            <div>
                <ul 
                style={{color: `${linkColor}`}}
                className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25} color={burgerColor} />
                </div>
            </div>
        </div>
{/* NAV */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
                nav 
                    ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
            >
                <div>
                    <div className='flex w-full items-center justify-between'>
                       <Link href='/'>
                            <Image src={cjd} alt='logo image' width='50' height='35' />
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something together!</p>
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase '>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'> Home </li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'> About </li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'> Skills </li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'> Projects </li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'> Contact </li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#B3995D]'>Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a target="_blank" href="https://linkedin.com/in/chrisj117" rel="noopener noreferrer">
                                    <FaLinkedinIn /> 
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a target="_blank" href="https://github.com/chrisfyi" rel="noopener noreferrer">
                                    <FaGithub /> 
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href={`mailto:chrisfyi@hotmail.com`}>
                                    <AiOutlineMail /> 
                                </a>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar