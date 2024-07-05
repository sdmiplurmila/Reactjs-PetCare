import React from 'react'

const TopHeader = () => {
  return (
    <div>
      {/* Top Header Section Start */}
   <section className="header_Section_main_wrapper">
      <div className="container">
         <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 p-0">
               <div className="header_menu">
                  <div className="footer-social-icon">
                     <a href="/#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                     <a href="/#"><i className="fab fa-twitter twitter-bg"></i></a>
                     <a href="/#"><i className="fab fa-google-plus-g google-bg"></i></a>
                     <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-6">
               <div className="action_box">
                  <p><i className="fa-solid fa-mobile-screen"></i> 123-123-1234</p>
                  <p><i className="fa-solid fa-location-dot"></i> 248 Texas , 43539</p>
                  <p><i className="fa-regular fa-clock"></i> Monday - Friday : 09:00-17:00</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* Top Header Section End */}
    </div>
  )
}

export default TopHeader
