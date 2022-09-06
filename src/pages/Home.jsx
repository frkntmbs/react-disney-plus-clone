import React from "react";
import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard } from "swiper";

import sliderData from "../data/sliders";

function Home() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="main-slider"
      >
        {sliderData?.map((item) => (
          <SwiperSlide>
            <NavLink to="/">
              <img
                className="slider-bg-img"
                src={item.backgorund}
                alt="slider-img"
              />
              {!item.message ? (
                <img
                  className="slider-text-img"
                  src={item.text}
                  alt="slider-img"
                />
              ) : (
                <div className="slider-message-items">
                  <img src={item.text} alt="slider-img" className="w-[27%]" />
                  <h4 className="text-xl font-semibold text-white">
                    {item.message}
                  </h4>
                </div>
              )}
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Home;
