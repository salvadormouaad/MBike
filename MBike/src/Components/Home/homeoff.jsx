import React from 'react'
import Footer from './Footer'
import Home from './home'
import NavBar from './Navbar'
import Slide1 from './Slide1'
import TrustedBrands from './TrustedBrands'
import GearSlide from './gearsslide'
import Section from '../Catalogue/section_bike'
export default function Homeoff() {
  return (
    <>
        <Home/>
        <NavBar/>
        <TrustedBrands/>
        <Slide1/>
        <GearSlide/>
        <Section/>
        <Footer/>

    </>
  )
}
