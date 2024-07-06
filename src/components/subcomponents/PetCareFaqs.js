import React, { useState } from 'react';
import girldog1 from '../../assets/images/about.jpg';
import girldog2 from '../../assets/images/about-2.jpg';
import girldog3 from '../../assets/images/about-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle

const PetCareFaqs = () => {
  const [activeAccordion, setActiveAccordion] = useState('collapseOne'); // Default active accordion item

  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion(null); // Collapse the active accordion if clicked again
    } else {
      setActiveAccordion(accordionId); // Expand the clicked accordion
    }
  };

  return (
    <div>
      {/* Faq Section Start */}
      <section className="faq_section_main_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq_head">
                <h2>Frequently Asked Questions</h2>
                <p className="mb-3">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button ${activeAccordion === 'collapseOne' ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion('collapseOne')}
                      aria-expanded={activeAccordion === 'collapseOne'}
                      aria-controls="collapseOne"
                    >
                      How To Train Your Pet Dog?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseOne' ? 'show' : ''}`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    <ol type="1">
                              <li>Far far away, behind the word mountains class.</li>
                              <li>Consonantia, there live the blind texts.</li>
                              <li>When she reached the first hills of the Italic Mountains</li>
                              <li>Bookmarksgrove, the headline of Alphabet Village</li>
                              <li>Separated they live in Bookmarksgrove right</li>
                           </ol>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={`accordion-button ${activeAccordion === 'collapseTwo' ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion('collapseTwo')}
                      aria-expanded={activeAccordion === 'collapseTwo'}
                      aria-controls="collapseTwo"
                    >
                      How to manage your pets?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseTwo' ? 'show' : ''}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    <ol type="1">
                              <li>Far far away, behind the word mountains class.</li>
                              <li>Consonantia, there live the blind texts.</li>
                              <li>When she reached the first hills of the Italic Mountains</li>
                              <li>Bookmarksgrove, the headline of Alphabet Village</li>
                              <li>Separated they live in Bookmarksgrove right</li>
                           </ol>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className={`accordion-button ${activeAccordion === 'collapseThree' ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion('collapseThree')}
                      aria-expanded={activeAccordion === 'collapseThree'}
                      aria-controls="collapseThree"
                    >
                       What is the best grooming for your pets?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${activeAccordion === 'collapseThree' ? 'show' : ''}`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    <ol type="1">
                              <li>Far far away, behind the word mountains class.</li>
                              <li>Consonantia, there live the blind texts.</li>
                              <li>When she reached the first hills of the Italic Mountains</li>
                              <li>Bookmarksgrove, the headline of Alphabet Village</li>
                              <li>Separated they live in Bookmarksgrove right</li>
                           </ol>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
  <h2 className="accordion-header" id="headingFour">
    <button
      className={`accordion-button ${activeAccordion === 'collapseFour' ? '' : 'collapsed'}`}
      type="button"
      onClick={() => toggleAccordion('collapseFour')}
      aria-expanded={activeAccordion === 'collapseFour'}
      aria-controls="collapseFour"
    >
      What are those requirements for sitting pets?
    </button>
  </h2>
  <div
    id="collapseFour"
    className={`accordion-collapse collapse ${activeAccordion === 'collapseFour' ? 'show' : ''}`}
    aria-labelledby="headingFour"
    data-bs-parent="#accordionExample"
  >
    <div className="accordion-body">
    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                              right at the coast of the Semantics, a large language ocean.
                           </p>
    </div>
  </div>
</div>

              </div>
            </div>
            <div className="col-lg-6 pt-5">
              <div className="faq_main_img">
                <img src={girldog1} alt="Dog" />
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="faq_pic1">
                    <img src={girldog2} alt="Dog" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="faq_pic2">
                    <img src={girldog3} alt="Dog" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Faq Section End */}
    </div>
  );
};

export default PetCareFaqs;
