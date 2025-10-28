import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaLongArrowAltRight, FaGreaterThan, FaLessThan} from "react-icons/fa";
import { PiLessThan, PiGreaterThanLight } from "react-icons/pi";
import { Link } from 'react-scroll';
import H1 from '../assets/hero-1.jpg'
import H2 from '../assets/hero-2.jpg'
import H3 from '../assets/hero-3.jpg'
import H4 from '../assets/hero-4.jpg'

import 'swiper/css';
import 'swiper/css/navigation';


const heroSlides = [
  {
    bgImage: H1,
    title: 'Blessed Assurance International School',
    span: 'Motto: Nothing But the best',
    paragraghs: [
      'nothing but the best all over thw world jjjsjakaaakamammmmanxnbvfszcfaavzvzzczac',
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt dignissimos labore reiciendis!'
    ],
    buttonText: 'About',
    buttonLink: '/about'
  },
  {
    bgImage: H2,
    title: 'Blessed Assurance',
    span: 'Nothing But the best',
    paragraghs: [
      'nothing but the best all over thw world',
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt dignissimos labore reiciendis!'
    ],
    buttonText: 'About',
    buttonLink: '/about'
  },
  {
    bgImage: H3,
    title: 'Blessed Assurance',
    span: 'Nothing But the best',
    paragraghs: [
      'nothing but the best all over thw world',
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt dignissimos labore reiciendis!'
    ],
    buttonText: 'About',
    buttonLink: '/about'
  },
  {
    bgImage: H4,
    title: 'Blessed Assurance',
    span: 'Nothing But the best',
    paragraghs: [
      'nothing but the best all over thw world',
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt dignissimos labore reiciendis!'
    ],
    buttonText: 'About',
    buttonLink: '/about'
  },
]

// Marquee texts
const marqueeTexts = [
  'Blessed Assurance',
  'Great Blessed',
  'Nothing But The Best',
  'Up Blessed',
  'Nothing but the best',
  'Blessed Assurance',
  'Great Blessed',
  'Nothing But The Best',
  'Up Blessed',
  'Nothing but the best',
  'Blessed Assurance',
  'Great Blessed',
  'Nothing But The Best',
  'Up Blessed',
  'Nothing but the best',
  'Blessed Assurance',
  'Great Blessed',
  'Nothing But The Best',
  'Up Blessed',
  'Nothing but the best',
]

const Hero = () => {

  const [activeTab , setActiveTab] = useState('his')
  return (
    <>
      <div className='w-full h-screen relative'>
        <Swiper 
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        className='h-full'
        >
          {
            heroSlides.map((slide, index)=> (
              <SwiperSlide key={index}> 
                <div className='relative w-full h-screen flex justify-center text-white px-6' style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/65 z-0'>
                  <div className='hero-content relative z-10 max-w-4xl flex mx-auto px-4 flex-col h-full items-center justify-center'>
                    <h1 className='text-4xl lg:text-6xl font-medium uppercase text-center my-4'>{slide.title}
                      <span className='text-lg lg:text-xl font-medium whitespace-pre-line block mt-2'>{slide.span}</span>
                    </h1>
                    <div className='flex flex-col gap-2 text-base lg:text-lg text-center'>
                      {slide.paragraghs.map((para, i) => (
                        <p key={i} className='max-w-xl px-4 leading-6'>
                          {para}
                        </p>
                      ))}
                    </div>
                    <Link activeClass='active' to={slide.buttonLink} spy={true} smooth={true} offset={-70} duration={500}>
                     <button className='mt-6 flex items-center cursor-pointer rounded px-6 py-3 border border-white text-white uppercase tracking-wide hover:bg-white hover:text-black transition'>
                      {slide.buttonText} <FaLongArrowAltRight className='ml-3' />
                     </button>
                    </Link>
                  </div>
                  </div>
                </div>
              </SwiperSlide>

            ))
          }
          {/* Navigation Arrows */}

             <PiGreaterThanLight className='swiper-button-prev absolute right-4 top-[50%] z-20 text-white text-3xl swiper-btn'/>
        
            <PiLessThan className='swiper-button-next absolute left-4 top-[50%] z-20 text-white text-3xl swiper-btn swiper-next'/>
           

          
        </Swiper>
      </div>
        {/* Marquee texts */}
      <div className='overflow-hidden whitespace-nowrap my-10 relative'>
        <div className='animate-marquee flex w-max gap-8'>
          {
            marqueeTexts.map((item, idx) => (
              <div key={idx} className='min-w-[250px] h-[100px] border-2 border-gray-200 rounded-full flex items-center justify-center text-black text-2xl font-bold uppercase px-5'>{item}</div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Hero
