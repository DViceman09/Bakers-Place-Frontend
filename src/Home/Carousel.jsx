import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { TopCuisines } from "./TopCuisines";
import Carouselitem from "./Carouselitem";

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return (
        <div>
            <Slider {...settings}>
                {TopCuisines.map((item) => <Carouselitem image ={item.image} title={item.title}/>)}
            </Slider>
        </div>
    );
};

export default Carousel;