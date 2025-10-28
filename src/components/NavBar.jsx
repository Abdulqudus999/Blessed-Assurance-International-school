import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/blessed-logo.jpg'
import { FaBars, FaInstagram, FaTimes , FaFacebook } from 'react-icons/fa'


const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [])
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent border-b border-gray-400'}`}>
      <div className='flex justify-between gap-2 items-center px-[8%] lg:px-[12%] py-2'>

        {/* logo */}
        <Link className='flex items-center flex-row ' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
          <img src={logo} alt="logo" className='size-16 lg:size-20 rounded-full' />
          <span className='text-xl lg:text-2xl bg-gradient-to-r from-green-700 via-amber-500 to-amber-200 bg-clip-text text-transparent uppercase animate-text-gradient leading-tight font-bold font-serif'>Blessed Assurance school</span>
        </Link>

        {/* Desktop Nav */}

        <nav className='hidden lg:flex items-center space-x-6'> 
          <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer ${isSticky ? 'text-black' : 'text-white'}`} activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer ${isSticky ? 'text-black' : 'text-white'}`} activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer ${isSticky ? 'text-black' : 'text-white'}`} activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            Academics
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer ${isSticky ? 'text-black' : 'text-white'}`} activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            Events
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer ${isSticky ? 'text-black' : 'text-white'}`} activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            Gallery
          </Link>
           <Link className={`text-base font-medium transition-all hover:bg-gray-200 hover:text-black relative px-3 py-2 rounded cursor-pointer ${isSticky ? 'text-black' : 'text-white'}`} activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}

        <button className={`lg:hidden text-3xl ${isSticky ? 'text-white' : 'text-black'}`} onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FaTimes className={` ${isSticky ? 'text-black' :  'text-amber-200'}`}/> : <FaBars className={` ${isSticky ? 'text-black' :  'text-amber-200'}`}/>}
        </button>

        {/* Social links */}
        <div className={`hidden lg:flex space-x-2 ${isSticky ? 'text-white' : 'text-black'}`}>
          <FaFacebook className={`size-6 ${isSticky ? 'text-black' : 'text-white'}`} />
          <FaInstagram className={`size-6 ${isSticky ? 'text-black' : 'text-white'}`} />
        </div>

        {/* mobile side menu */}

        {
          openMenu && (
            <div className='side-menu lg:hidden bg-white text-black p-6 absolute top-32 left-0 right-0 border-b border-gray-300'>
                <ul className='space-y-6 menu'>
                  <li>
                    <Link className='block text-lg' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Academics
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className='block text-lg' activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setOpenMenu(false)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              
            </div>
          )
        }
      </div>
    </header>
  )
}

export default NavBar
