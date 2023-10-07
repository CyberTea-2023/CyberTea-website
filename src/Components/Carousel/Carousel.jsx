import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from '../../assets/CyberTEA Banner.png'
import './Carousel.css'

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className='carousel-container' >
            <Slider {...settings} className="carousel">
                <div>
                    <img src={banner} alt="Slide 1" className='carousel-image' />
                </div>
                <div>
                    <img src={banner} alt="Slide 2" className='carousel-image' />
                </div>
                <div>
                    <img src={banner} alt="Slide 3" className='carousel-image' />
                </div>
            </Slider>
            <div className="intro-text">
                <h2>Dive into the Cyber Frontier with Top Experts at CyberTea! 🚀🔐</h2>
                <h3>From: <span>11th December, 2023</span></h3>
                <h3>To: <span>16th December, 2023</span></h3>
                <h3>Venue: <span>Online & IIITS</span></h3>
                <h3>Organized by: <a href="https://www.iiits.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Information Technoloyg, Sri City</a></h3>
            </div>
        </div>
    );
};

export default Carousel;
