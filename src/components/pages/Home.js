import React from 'react'
import Herobanner from '../subcomponents/Herobannner'
import WhyChoose from '../subcomponents/WhyChoose'
import PetCounters from '../subcomponents/PetCounters'
import PetCareFaqs from '../subcomponents/PetCareFaqs'
import Appointment from '../subcomponents/Appointment'
import Servicebtm from './Servicebtm'
import Ourteambtm from './Ourteambtm'

const Home = () => {
  return (
    <div>
                <Herobanner />
                <WhyChoose />
                <PetCounters />
                <PetCareFaqs />
                <Servicebtm />
                <Ourteambtm />
                <Appointment />
    </div>
  )
}

export default Home
