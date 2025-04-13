import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutUsSection from '../components/home/AboutUsSection'
import FeatureSection from '../components/home/FeatureSection'
import PureFoods from '../components/home/PureFoods'

const HomePage = () => {
  return (
    <div className="mt-[100px]">
      <HeroSection />
      <AboutUsSection />
      <FeatureSection />
      <PureFoods />
    </div>
  )
}

export default HomePage
