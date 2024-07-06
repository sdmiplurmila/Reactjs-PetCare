import React from 'react'
import Herobanner from '../subcomponents/Herobannner'
import WhyChoose from '../subcomponents/WhyChoose'
import PetCounters from '../subcomponents/PetCounters'
import PetCareFaqs from '../subcomponents/PetCareFaqs'
import Services from './Services'
import OurTeam from './OurTeam'

const Home = () => {
  return (
    <div>
                <Herobanner />
                <WhyChoose />
                <PetCounters />
                <PetCareFaqs />
                <Services />
                <OurTeam />
    </div>
  )
}

export default Home
