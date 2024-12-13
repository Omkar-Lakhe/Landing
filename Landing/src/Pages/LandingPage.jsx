import React from 'react'
import Navbar from '../Components/LandingPage/Hero/Navbar'
import Hero from '../Components/LandingPage/Hero/Hero'
import { TheProblem } from '../Components/LandingPage/TheProblem'
import { TheSolution } from '../Components/LandingPage/TheSolution'
import { WhatInside } from '../Components/LandingPage/WhatInside'
import { ComingSoon } from '../Components/LandingPage/ComingSoon'
import { FAQ } from '../Components/LandingPage/FAQ'
import PoweredByAi from '../Components/LandingPage/PoweredByAi'
import { Testimonial } from '../Components/LandingPage/Testimonial'


export const LandingPage = () => {
  return (
    <div>
        
        <Hero/>
        <TheProblem/>
        <TheSolution/>
        <WhatInside/>
        <ComingSoon/>
        <Testimonial/>
        <FAQ/>
        <PoweredByAi/>
    </div>
  )
}
