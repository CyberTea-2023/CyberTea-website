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
    const imgStyle = {
        width: '100%',
        maxHeight: '80vh'
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={banner} alt="Slide 1" style={imgStyle} />
                </div>
                <div>
                    <img src={banner} alt="Slide 2" style={imgStyle} />
                </div>
                <div>
                    <img src={banner} alt="Slide 3" style={imgStyle} />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
