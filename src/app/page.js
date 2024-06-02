import React from 'react'
import Features from '@/components/Features'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Hero from '@/components/Hero'

function page() {
  return (
    <div className="lg:mx-32 font-montserrat mt-5">
      <Header/>
      <Hero/> 
      <Features/>
      <Testimonials/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default page