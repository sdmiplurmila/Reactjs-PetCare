import React from 'react'
import Dog1 from '../../assets/images/labrador.jpg'
import Dog2 from '../../assets/images/german-shepherd.jpg'
import Dog3 from '../../assets/images/rottweiler.jpg'
import Dog4 from '../../assets/images/beagle.jpg'
import Dog5 from '../../assets/images/siberian-husky.jpg'
import Dog6 from '../../assets/images/pomeranian.jpg'
import Dog7 from '../../assets/images/Boxer.jpg'
import Dog8 from '../../assets/images/golden-retriever.jpg'

const BuyDogs = () => {
  return (
    <div>
       {/* Buy section Start */}
    <section className="buy_section_main_wrapper">
        <div className="container">
                <div className="buy_head">
                    <h2>Popular Breeds</h2>
                    <p>Classic Breeds that Never Go Out of Fashion</p>
                    <button type="button" className="buy_btn_head"> ALL DOGS FOR SALE
                    </button>
                </div>
                <div className="row">
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="card">
                            <img src={Dog1} alt="" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="card-title">
                                        <h4>Labrador</h4>
                                        <h2>Rs.13000</h2>
                                    </div>

                                </div>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                    dignissimos.
                                </p>
                                <div className="btn-group">
                                    <div className="btn">
                                        <a href="">Buy Now</a>
                                    </div>
                                    <a href=""> Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="card">
                            <img src={Dog2} alt="Dog" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="card-title">
                                        <h4>German Shepherd</h4>
                                        <h2>Rs.14000</h2>
                                    </div>

                                </div>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                    dignissimos.
                                </p>
                                <div className="btn-group">
                                    <div className="btn">
                                        <a href="">Buy Now</a>
                                    </div>
                                    <a href=""> Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="buy_box">
                            <div className="card">
                            <img src={Dog3} alt="Dog" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-title">
                                            <h4>Rottweiler</h4>
                                            <h2>Rs.15000</h2>
                                        </div>

                                    </div>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                        dignissimos.
                                    </p>
                                    <div className="btn-group">
                                        <div className="btn">
                                            <a href="">Buy Now</a>
                                        </div>
                                        <a href=""> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="buy_box">
                            <div className="card">
                            <img src={Dog4} alt="Dog" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-title">
                                            <h4>Beagle</h4>
                                            <h2>Rs.5000</h2>
                                        </div>

                                    </div>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                        dignissimos.
                                    </p>
                                    <div className="btn-group">
                                        <div className="btn">
                                            <a href="">Buy Now</a>
                                        </div>
                                        <a href=""> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="buy_box">
                            <div className="card">
                            <img src={Dog5} alt="Dog" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-title">
                                            <h4>Siberian</h4>
                                            <h2>$120</h2>
                                        </div>

                                    </div>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                        dignissimos.
                                    </p>
                                    <div className="btn-group">
                                        <div className="btn">
                                            <a href="">Buy Now</a>
                                        </div>
                                        <a href=""> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="buy_box">
                            <div className="card">
                            <img src={Dog6} alt="Dog" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-title">
                                            <h4>Pomeranian

                                            </h4>
                                            <h2>$120</h2>
                                        </div>

                                    </div>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                        dignissimos.
                                    </p>
                                    <div className="btn-group">
                                        <div className="btn">
                                            <a href="">Buy Now</a>
                                        </div>
                                        <a href=""> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="buy_box">
                            <div className="card">
                            <img src={Dog7} alt="Dog" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-title">
                                            <h4>Boxer</h4>
                                            <h2>$120</h2>
                                        </div>

                                    </div>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                        dignissimos.
                                    </p>
                                    <div className="btn-group">
                                        <div className="btn">
                                            <a href="">Buy Now</a>
                                        </div>
                                        <a href=""> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buy_box">
                        <div className="buy_box">
                            <div className="card">
                            <img src={Dog8} alt="Dog" />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-title">
                                            <h4>golden-retriever</h4>
                                            <h2>$120</h2>
                                        </div>

                                    </div>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                        dignissimos.
                                    </p>
                                    <div className="btn-group">
                                        <div className="btn">
                                            <a href="">Buy Now</a>
                                        </div>
                                        <a href=""> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Buy section End */}
    </div>
  )
}

export default BuyDogs
