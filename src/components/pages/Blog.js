import React from 'react'
import { Link } from 'react-router-dom';
import Blog1 from '../../assets/images/blog1.webp'
import Blog2 from '../../assets/images/blog2.jpg'
import Blog3 from '../../assets/images/blog3.jpeg'
import Blog4 from '../../assets/images/blog4.jpg'
import Blog5 from '../../assets/images/blog5.jpg'
import Blog6 from '../../assets/images/blog8.jpg'

const Blog = () => {
  return (
    <div>
        <section className="about_header_section_main_wrapper">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="abt_head">
                     <h1>BLOG</h1>
                  </div>
                  <div className="bread mt-3 text-center">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                           <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Blog Section Start */}
    <section className="blog_Secction_main_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="blog_box">
                        <img src={Blog1} alt="DOg" />
                        <span>July 27, 2023</span>
                        <h2>Transitioning to a New Dog Food: A Smooth and Successful Process</h2>
                        <p>As a responsible dog owner, providing the best nutrition for your furry companion is
                            paramount. However, changing your dog's food abruptly can lead to digestive upset and
                            discomfort. To ensure a smooth and successful transition to a new dog food,...</p>
                        <button className="blog_link">READ MORE </button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_box">
                        <img src={Blog2} alt="Dog" />
                        <span>July 27, 2023</span>
                        <h2>5 Fun Facts and Tips for Taking Care of Golden Retrievers</h2>
                        <p>As a responsible dog owner, providing the best nutrition for your furry companion is
                            paramount. However, changing your dog's food abruptly can lead to digestive upset and
                            discomfort. To ensure a smooth and successful transition to a new dog food,...</p>
                        <button className="blog_link">READ MORE </button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog_box">
                        <img src={Blog3} alt="Dog" />
                        <span>July 27, 2023</span>
                        <h2>The Essential Guide to Work-Life Balance for Pet Parents</h2>
                        <p>As a responsible dog owner, providing the best nutrition for your furry companion is
                            paramount. However, changing your dog's food abruptly can lead to digestive upset and
                            discomfort. To ensure a smooth and successful transition to a new dog food,...</p>
                        <button className="blog_link">READ MORE </button>
                    </div>
                </div>
                <div className="col-lg-4 mt-5">
                    <div className="blog_box">
                        <img src={Blog4} alt="Dog" />
                        <span>July 27, 2023</span>
                        <h2>Are Cats Really Independent? Debunking the Myth of Feline Autonomy</h2>
                        <p>As a responsible dog owner, providing the best nutrition for your furry companion is
                            paramount. However, changing your dog's food abruptly can lead to digestive upset and
                            discomfort. To ensure a smooth and successful transition to a new dog food,...</p>
                        <button className="blog_link">READ MORE </button>
                    </div>
                </div>
                <div className="col-lg-4 mt-5">
                    <div className="blog_box">
                        <img src={Blog5} alt="DOg" />
                        <span>July 27, 2023</span>
                        <h2>Keeping Your Furry Friend Happy: 7 Activities to Entertain Your Pet at Home</h2>
                        <p>As a responsible dog owner, providing the best nutrition for your furry companion is
                            paramount. However, changing your dog's food abruptly can lead to digestive upset and
                            discomfort. To ensure a smooth and successful transition to a new dog food,...</p>
                        <button className="blog_link">READ MORE </button>
                    </div>
                </div>
                <div className="col-lg-4 mt-5">
                    <div className="blog_box">
                        <img src={Blog6} alt="Dog" />
                        <span>July 27, 2023</span>
                        <h2>How to Train a Kitten at Home And What All Needs To be Taught</h2>
                        <p>As a responsible dog owner, providing the best nutrition for your furry companion is
                            paramount. However, changing your dog's food abruptly can lead to digestive upset and
                            discomfort. To ensure a smooth and successful transition to a new dog food,...</p>
                        <button className="blog_link">READ MORE </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Blog Section End */}
    </div>
  )
}

export default Blog
