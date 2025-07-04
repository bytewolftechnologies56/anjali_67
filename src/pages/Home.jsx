import React from 'react'
import Hero from '../components/Hero'
import PopularCategories from "../components/PopularCategories";
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularCategories />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
