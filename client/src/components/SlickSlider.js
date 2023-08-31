import React from 'react'
import Slider from "react-slick";
import '../assets/styles/sliderStyles.css'
import slider1 from '../assets/images/img_slider1.jpg'
import slider2 from '../assets/images/img_slider2.jpg'
import slider3 from '../assets/images/img_slider3.jpg'
import slider4 from '../assets/images/img_slider4.jpg'


function SlickSlider() {

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    const images = [ slider1, slider2, slider3, slider4 ]
       
    return (
        <div>
            
            <Slider {...setting}>
                {
                    images.map((image) => {
                        return (
                            <div className=" img-slider rounded-lg">
                                <img src={image} alt="slider" />
                            </div>
                        )
                    })
                }

            </Slider>
        </div>
    )
}

export default SlickSlider;