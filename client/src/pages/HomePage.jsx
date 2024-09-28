import React from 'react'
import DomainsCovered from '../components/homepage/DomainsCovered'
import GetStartedSteps from '../components/homepage/GetStartedSteps'
import MentorComponent from '../components/homepage/MentorComponent'
import ImageCarousel from '../components/homepage/ImageCarousel '
import MentorshipBenefits from '../components/homepage/MentorshipBennifits'
import Reviews from '../components/homepage/Reviews'
import MentorGuidance from '../components/homepage/MentorGuidance'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='bg-white'>
        <MentorGuidance />
        <ImageCarousel />
        <GetStartedSteps />
        <MentorComponent />
        <DomainsCovered />
        <Reviews />
        <MentorshipBenefits />
        <Footer />
    </div>
  )
}

export default HomePage