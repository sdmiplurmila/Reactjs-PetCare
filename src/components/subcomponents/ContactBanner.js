import React from 'react'
import { Link } from 'react-router-dom'


const ContactBanner = () => {
  return (
    <div>
        <section className="about_header_section_main_wrapper">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="abt_head">
                     <h1>CONTACT US</h1>
                  </div>
                  <div className="bread mt-3 text-center">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                           <li className="breadcrumb-item"><Link to="/contactus">Contact Us</Link></li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default ContactBanner
