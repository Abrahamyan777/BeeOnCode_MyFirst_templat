import React from 'react';
import './contacts.scss'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Contacts = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
  
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings1 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
    };
    return (
        <div className='contactsContainer'>
            <div className='firstSlick'>
                <Slider {...settings}>
                    {
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className='card' >
                                <div className='card-top'>
                                    <img src='https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/imgTag.png' />
                                    <h2>{index}</h2>
                                </div>
                                <div className='card-bottom'>
                                    <h3>AASdfasdf</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className='secondSlick'>
                <Slider {...settings1}>
                    {
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className='card' >
                                <div className='card-top'>
                                    <img src='https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/imgTag.png' />
                                    <h2>{index}</h2>
                                </div>
                                <div className='card-bottom'>
                                    <h3>AASdfasdf</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        ))
                    }

                </Slider>

            </div>

        </div>
    );
};

export default Contacts;