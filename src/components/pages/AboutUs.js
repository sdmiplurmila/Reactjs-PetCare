import React from 'react'
import WhyChoose from '../subcomponents/WhyChoose'
import PetCounters from '../subcomponents/PetCounters'
import PetCareFaqs from '../subcomponents/PetCareFaqs'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
          <section className="about_header_section_main_wrapper">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="abt_head">
                     <h1>ABOUT US</h1>
                  </div>
                  <div className="bread mt-3 text-center">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><Link to="/"> Home</Link></li>
                           <li className="breadcrumb-item"><Link to="/aboutus">About Us</Link></li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <WhyChoose />
      <PetCounters />
      <PetCareFaqs />
    </div>
  )
}

export default AboutUs
