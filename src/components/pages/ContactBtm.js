import React from 'react'
import Contactshow from '../../assets/images/doct-appointment.avif';

const ContactBtm = () => {
  return (
    <div>
         {/* Contact Section Start */}
   <section className="contact_section_main_wrapper">
      <div className="container py-0">
         <div className="row align-items-center">
            <div className="col-lg-6">
               <div className="contact_sub">
                  <h3>DROP US A LINE!</h3>
               </div>
               <div className="contact_head">
                  <h3>Make An Appointment</h3>
               </div>

               <form action="" className="contact_form">

                  <div className="row">

                     <div className="col-lg-6 col-md-6 col-12">

                        <input size="40" className="form-control" aria-invalid="false" placeholder="Your Name *" value=""
                           type="text" name="your-name" required />
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                        <input size="40" className="form-control" aria-invalid="false" placeholder="Your Email *" value=""
                           type="text" name="your-name" />
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                        <input size="40" className="form-control" aria-invalid="false" placeholder="Your Phone *" value=""
                           type="text" name="your-name" />
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                        <select className="form-control" aria-invalid="false" name="pettype">
                           <option value="Pet Type*">Pet Type*</option>
                           <option value="cats">cats</option>
                           <option value="dogs">dogs</option>
                           <option value="birds">birds</option>
                           <option value="rabbits">rabbits</option>
                        </select>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                        <select className="form-control" aria-invalid="false" name="pettype">
                           <option value="Pet Type*">Time of visit*</option>
                           <option value="9AM - 10AM">9AM - 10AM</option>
                           <option value="10AM - 11AM">10AM - 11AM</option>
                           <option value="11AM - 12AM">11AM - 12AM</option>
                           <option value="12PM - 1PM">12PM - 1PM</option>
                        </select>
                     </div>
                     <div className="col-lg-6 col-md-6 col-12">
                        <input className="form-control" aria-invalid="false" placeholder="Date of visit" value=""
                           type="date" name="date" />
                     </div>
                     <div className="col-lg-12">
                        <textarea cols="40" rows="10" className="form-control text" aria-required="true"
                           aria-invalid="false" placeholder="Describe Your Request" name="your-massage"></textarea>
                        <button type="button" className="contact_btn">Send Message</button>
                     </div>
                  </div>
               </form>

            </div>
            <div className="col-lg-6 mt-5 p-0">
               <div className="enquiry_pic">
                  <img src={Contactshow} className="img-fluid" alt="Dog" />
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* Contact Section End */}
    </div>
  )
}

export default ContactBtm
