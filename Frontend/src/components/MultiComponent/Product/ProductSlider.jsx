import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
 import Cabbage1 from '../assets/Vegistable/Cabbage1.png';
import Cabbage2 from '../assets/Vegistable/Cabbage2.png';
import Cabbage3 from '../assets/Vegistable/Cabbage3.png';
import Cabbage4 from '../assets/Vegistable/Cabbage4.png';

const images = [
Cabbage1,
Cabbage2,
Cabbage3,
Cabbage4,

];
function ProductSlider() {
  return (
    <div className="flex">
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export default ProductSlider;