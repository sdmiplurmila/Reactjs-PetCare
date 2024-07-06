import React from 'react'
import choosedog from '../../assets/images/about-1.jpg'

const WhyChoose = () => {
  return (
    <div>
      {/* Choose Us Section Start */}
   <section className="choose_us_section_main_wrapper">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12 p-0">
               {/* <img src="assets/images/about-1.jpg"> */}
               <img src={choosedog} alt="Dog" />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 pl-md-5 py-md-5">
               <div className=" choose_head">
                  <h4>Why Choose Us?</h4>
               </div>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 d-flex choose_us_section_main_wrapper2">
                     <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-stethoscope"></i></span>
                     </div>
                     <div className="choose_text pl-3 mb-3">
                        <h4>Care Advices</h4>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 d-flex choose_us_section_main_wrapper2">
                     <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-stethoscope"></i></span>
                     </div>
                     <div className="choose_text pl-3 mb-3">
                        <h4>Customer Supports</h4>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 d-flex choose_us_section_main_wrapper2">
                     <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-stethoscope"></i></span>
                     </div>
                     <div className="choose_text pl-3 mb-3">
                        <h4>Emergency Services</h4>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 d-flex choose_us_section_main_wrapper2">
                     <div className="icon d-flex align-items-center justify-content-center">
                        <span><i className="fa-solid fa-stethoscope"></i></span>
                     </div>
                     <div className="choose_text pl-3 mb-3">
                        <h4>Veterinary Help
                        </h4>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
 {/* Choose Us Section End */}
    </div>
  )
}

export default WhyChoose
