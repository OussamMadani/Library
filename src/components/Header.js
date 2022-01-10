import React from 'react';
import imgHeader from '../images/imgHeader-removebg-preview.png'
import NavBar2 from '../layout/NavBar2';


const Header = ({handleLogout}) =>{

  return(
    <section id="hero" className="hero ">    
      <NavBar2 handleLogout={handleLogout}/>
      <div className='d-flex align-items-center'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={imgHeader} className="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;