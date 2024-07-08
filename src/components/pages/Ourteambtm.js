import React from 'react'
import teamtop from '../../assets/images/service2.jpg';
import dogdr1 from '../../assets/images/vet.png';
import dogdr2 from '../../assets/images/vet2.png';
import dogdr3 from '../../assets/images/vet3.png';


const Ourteambtm = () => {
  return (
    <div>
      {/* Team abt Section Start */}
   <section className="team_abt_section_main_wrapper">
      <div className="container">
         <div className="team_head">
            <h2>TEAM</h2>
         </div>
         <div className="row align-items-center">
            <div className="col-lg-4 p-0 m-0">
               <div className="abt_pic">
                  <img src={teamtop} alt="Dog" />
               </div>
            </div>
            <div className="col-lg-8">
               <div className="abt_txt">
                  <h2>Our Professional Staff Helps you right!</h2>
                  <hr />
                  <p>Nulla facilisi. Donec vel feugiat urna, vel sagittis enim. Quisque eros odio, cursus id
                     libero ac, ornare viverra quam. Vestibulum diam diam, varius id tortor vitae, gravida congue
                     risus. Fusce vitae ex vitae neque dignissim vulputate. Fusce et massa sodales ex scelerisque
                     finibus. Vestibulum porttitor erat lacus, id tincidunt ex luctus nec. Suspendisse tempus
                     porttitor libero, eu cursus ipsum. Phasellus et gravida neque, quis porttitor metus.
                     Phasellus tempor enim enim, eget interdum quam vulputate sed. Maecenas ac dolor justo.
                     Maecenas rhoncus, metus a condimentum suscipit, purus ligula sollicitudin nisi, scelerisque
                     porttitor metus odio vel nisl. In hac habitasse platea dictumst. Vivamus ut lacus diam.
                     Vestibulum porttitor erat lacus, id tincidunt ex luctus nec. Suspendisse tempus porttitor
                     libero.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* Team abt Section End */}
   {/* Our Dr Section Start */}
   <section className="our_dr_section_main_wrapper">
      <div className="container">
         <div className="dr_head">
            <h2>
               OUR DOCTORS TEAM
            </h2>
         </div>
         <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
               <div className="team_box">
                  <div className="shadow">
                     <img src={dogdr1} alt="Dog" className="img-fluid" />
                     <div className="staff-detail">
                        <h4>Dr Maria Doe</h4>
                        <span>Surgery Veterinary</span>
                        <p>Maria Doe M.Phill Veterinary from Harvard! Nulla facilisi. Donec vel feugiat urna,
                           vel sagittis enim. Quisque eros odio, cursus id libero ac, ornare viverra quam.
                           Vestibulum diam diam, varius id tortor vitae, gravida congue
                        </p>
                     </div>
                     <div className="staff_time">
                        <p>Monday - Friday: 9:00 - 15:00</p>
                        <p>Sunday - Saturday: Only Appointment</p>
                     </div>
                     <div className="staff_icon">
                        <ul>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                        </ul>
                     </div>
                     <button type="button" className="staff_btn">
                        READ MORE 
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
               <div className="team_box">
                  <div className="shadow">
                  <img src={dogdr2} alt="Dog" className="img-fluid" />
                     <div className="staff-detail">
                        <h4>Dr Maria Doe</h4>
                        <span>Surgeon</span>
                        <p>Maria Doe M.Phill Veterinary from Harvard! Nulla facilisi. Donec vel feugiat urna,
                           vel sagittis enim. Quisque eros odio, cursus id libero ac, ornare viverra quam.
                           Vestibulum diam diam, varius id tortor vitae, gravida congue
                        </p>
                     </div>
                     <div className="staff_time">
                        <p>Monday - Friday: 9:00 - 15:00</p>
                        <p>Sunday - Saturday: Only Appointment</p>
                     </div>
                     <div className="staff_icon">
                        <ul>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                        </ul>
                     </div>
                     <button type="button" className="staff_btn">
                        READ MORE 
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
               <div className="team_box">
                  <div className="shadow">
                  <img src={dogdr3} alt="Dog" className="img-fluid" />
                     <div className="staff-detail">
                        <h4>Dr Maria Doe</h4>
                        <span>Surgeon</span>
                        <p>Maria Doe M.Phill Veterinary from Harvard! Nulla facilisi. Donec vel feugiat urna,
                           vel sagittis enim. Quisque eros odio, cursus id libero ac, ornare viverra quam.
                           Vestibulum diam diam, varius id tortor vitae, gravida congue
                        </p>
                     </div>
                     <div className="staff_time">
                        <p>Monday - Friday: 9:00 - 15:00</p>
                        <p>Sunday - Saturday: Only Appointment</p>
                     </div>
                     <div className="staff_icon">
                        <ul>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                        </ul>
                     </div>
                     <button type="button" className="staff_btn">
                        READ MORE
                     </button>
                  </div>
               </div>
            </div>


            <div className="col-lg-4 col-md-6 col-12">
               <div className="team_box">
                  <div className="shadow">
                  <img src={dogdr1} alt="Dog" className="img-fluid" />
                     <div className="staff-detail">
                        <h4>Dr Maria Doe</h4>
                        <span>Surgery Veterinary</span>
                        <p>Maria Doe M.Phill Veterinary from Harvard! Nulla facilisi. Donec vel feugiat urna,
                           vel sagittis enim. Quisque eros odio, cursus id libero ac, ornare viverra quam.
                           Vestibulum diam diam, varius id tortor vitae, gravida congue
                        </p>
                     </div>
                     <div className="staff_time">
                        <p>Monday - Friday: 9:00 - 15:00</p>
                        <p>Sunday - Saturday: Only Appointment</p>
                     </div>
                     <div className="staff_icon">
                        <ul>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                        </ul>
                     </div>
                     <button type="button" className="staff_btn">
                        READ MORE 
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
               <div className="team_box">
                  <div className="shadow">
                  <img src={dogdr2} alt="Dog" className="img-fluid" />
                     <div className="staff-detail">
                        <h4>Dr Maria Doe</h4>
                        <span>Surgeon</span>
                        <p>Maria Doe M.Phill Veterinary from Harvard! Nulla facilisi. Donec vel feugiat urna,
                           vel sagittis enim. Quisque eros odio, cursus id libero ac, ornare viverra quam.
                           Vestibulum diam diam, varius id tortor vitae, gravida congue
                        </p>
                     </div>
                     <div className="staff_time">
                        <p>Monday - Friday: 9:00 - 15:00</p>
                        <p>Sunday - Saturday: Only Appointment</p>
                     </div>
                     <div className="staff_icon">
                        <ul>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                        </ul>
                     </div>
                     <button type="button" className="staff_btn">
                        READ MORE 
                     </button>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
               <div className="team_box">
                  <div className="shadow">
                  <img src={dogdr3} alt="Dog" className="img-fluid" />
                     <div className="staff-detail">
                        <h4>Dr Maria Doe</h4>
                        <span>Surgeon</span>
                        <p>Maria Doe M.Phill Veterinary from Harvard! Nulla facilisi. Donec vel feugiat urna,
                           vel sagittis enim. Quisque eros odio, cursus id libero ac, ornare viverra quam.
                           Vestibulum diam diam, varius id tortor vitae, gravida congue
                        </p>
                     </div>
                     <div className="staff_time">
                        <p>Monday - Friday: 9:00 - 15:00</p>
                        <p>Sunday - Saturday: Only Appointment</p>
                     </div>
                     <div className="staff_icon">
                        <ul>
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                        </ul>
                     </div>
                     <button type="button" className="staff_btn">
                        READ MORE 
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* Our Dr Section Start */}
    </div>
  )
}

export default Ourteambtm
