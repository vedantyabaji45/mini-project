import React from 'react'

import Navbar from '../components/navbar'
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import PriceCards from '../components/PriceCards'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my recent works"/>
      <Work />
      <PriceCards />
      <Footer />
    </div>
  )
}

export default Project