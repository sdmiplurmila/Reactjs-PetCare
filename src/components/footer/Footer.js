import React from 'react';
import Footlogo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div>
      {/* Footer Section Start */}
      <section className="footer_section_main_wrapper">
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-3">
              <div className="row align-items-center">
                <div className="col-xl-4 col-md-4">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>A : 58 A, East Madison Street, MD, USA 4508</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4">
                  <div className="single-cta">
                    <i className="fas fa-phone"></i>
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span> +000 - 123 - 456789</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open"></i>
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>mail@petcare.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50 pb-3">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="/#">
                        <img src={Footlogo} className="img-fluid" alt="Gog" />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor
                        incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  <div className="footer-social-icon">
                     <a href="/#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                     <a href="/#"><i className="fab fa-twitter twitter-bg"></i></a>
                     <a href="/#"><i className="fab fa-google-plus-g google-bg"></i></a>
                     <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li><a href="/">HOME</a></li>
                      <li><a href="/aboutus">ABOUT US</a></li>
                      <li><a href="/services">OUR SERVICE</a></li>
                      <li><a href="/#">OUR TEAM</a></li>
                      <li><a href="/#">BLOG</a></li>
                      <li><a href="/#">CONTACT US</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button><i className="fab fa-telegram-plane"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="copyright-text">
                    <p>Copyright &copy; 2018, All Right Reserved <a href="/#">PET CARE</a></p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end">
                  <div className="copyright-text">
                    <p>Developed By SDMIPL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      {/* Footer Section End */}
    </div>
  );
};

export default Footer;
