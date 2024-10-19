"use client"
import { useEffect } from 'react'

import Hero from '@/components/Hero'
import FixedMenu from '@/components/FixedMenu'
import Services from '@/components/Services'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Work from '@/components/Work'
import Contact from '@/components/Contact'



const Home = () => {
//implement locomotive scroll

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);


  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* tempary divide */}
      <div className='h-[3000px]'></div>

    </>
  )}

export default Home