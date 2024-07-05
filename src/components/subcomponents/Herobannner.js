import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/2150644878.jpg';
import img2 from '../../assets/images/2150644878.jpg';
import img3 from '../../assets/images/2150644878.jpg';

class Herobanner extends Component {
  
    render() {
        return (
            <Carousel>
                <div className='item'>
                    <img src={img1} alt="Slide 1" />
                    <div class="item_text">
                  <h1>PREVENTIVE <br />MEDICINE</h1>
                  <p>Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos<br />
                     skateboard migas farm-to-table artisan kombucha.
                  </p>
                  <button type="button" class="banner_btn">Read More</button>
               </div>
                </div>
                <div className='item'>
                    <img src={img2} alt="Slide 2" />
                    <div class="item_text">
                  <h1>PREVENTIVE <br />MEDICINE</h1>
                  <p>Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos<br />
                     skateboard migas farm-to-table artisan kombucha.
                  </p>
                  <button type="button" class="banner_btn">Read More</button>
               </div>
                </div>
                <div className='item'>
                    <img src={img3} alt="Slide 3" />
                    <div class="item_text">
                  <h1>PREVENTIVE <br />MEDICINE</h1>
                  <p>Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos<br />
                     skateboard migas farm-to-table artisan kombucha.
                  </p>
                  <button type="button" class="banner_btn">Read More</button>
               </div>
                </div>
            </Carousel>
        );
    }
}

export default Herobanner;
