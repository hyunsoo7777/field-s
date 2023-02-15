import Title from "../common/Text/TitleEn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import TECH_img01 from "../../assets/tech_01.jpg";
import TECH_img02 from "../../assets/tech_02.jpg";
import TECH_img03 from "../../assets/tech_03.jpg";

function Tech() {
  return (
    <div className="pt-[200px] w-full text-center">
      <Title title="Our technologies" color="text-primary"></Title>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={100}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        initialSlide={1}
        loop={true}
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
