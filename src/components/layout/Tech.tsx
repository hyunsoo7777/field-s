import Title from "../common/Text/TitleEn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import TECH_img01 from "../../assets/tech_01.jpg";
import TECH_img02 from "../../assets/tech_02.jpg";
import TECH_img03 from "../../assets/tech_03.jpg";

function Tech({ techContainerRef }) {
  return (
    <div className="pt-[200px] w-full text-center" ref={techContainerRef}>
      <Title title="Our technologies" color="text-primary"></Title>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        initialSlide={1}
        loop={true}
        // breakpoints={{
        //   // when window width is >= 1090px
        //   1330: {
        //     slidesPerView: 1.5,
        //     centeredSlides: true,
        //     autoplay: {
        //       delay: 2000,
        //     },
        //   },
        // }}
      >
        <SwiperSlide>
          <div
            className="mt-[100px] mb-[300px] w-[900px] h-[500px] rounded-[50px]"
            style={{
              backgroundImage: `url(${TECH_img01})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="mt-[100px] mb-[300px] w-[900px] h-[500px] rounded-[50px]"
            style={{
              backgroundImage: `url(${TECH_img02})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="mt-[100px] mb-[300px] w-[900px] h-[500px] rounded-[50px]"
            style={{
              backgroundImage: `url(${TECH_img03})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Tech;
