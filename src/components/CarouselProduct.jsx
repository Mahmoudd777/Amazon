import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 9, }, (_, i) => (
          <SwiperSlide key={i}>
          
              <img
                src={`../images/product_${i}_small.jpg`}
                className="h-[200px]"
                alt="Carousel product"
              />  <Link to={`/product/${i}`}>
                              <button
                  
                  className="btn"
                >
                  View product  
                </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
