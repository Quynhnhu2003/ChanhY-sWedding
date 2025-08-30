// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import TypingEffect from "../../ultils/components/TypingEffect";

const slideImage = [
  {
    id: 1,
    img: "/slide/slide1.jpg",
  },
  {
    id: 2,
    img: "/slide/slide2.jpg",
  },
  {
    id: 3,
    img: "/slide/slide3.jpg",
  },
  {
    id: 4,
    img: "/slide/slide4.jpg",
  },
  {
    id: 5,
    img: "/slide/slide5.jpg",
  },
];

const text:string[] =
  ["Cảm ơn anh và em đã cho nhau cơ hội để được tìm hiểu, thấu hiểu và sẻ chia. Dẫu chúng ta chưa hoàn hảo, nhưng bằng tình yêu và sự cố gắng, cả hai đã cùng nhau thay đổi và yêu thương nhiều hơn mỗi ngày."];

function OurStory() {
  // ** State
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.ourStory}>
      <div className={styles.ourStory__wrapper}>
        <div className={styles["bg-left"]}></div>
        <div className={styles["bg-right"]}></div>
      </div>
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay, EffectFade]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-100} // làm cho slide giữa che bớt hai bên
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.8,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ width: "100%", padding: "4rem 0 2rem" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slideImage.map((i, index) => (
          <SwiperSlide key={i.id + "-" + index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <img
                src={i.img}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Overlay mờ cho slide không active */}
              {activeIndex !== index && <div className="slide-overlay" />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.ourStory__content}>
        <TypingEffect strings={text} />
      </div>
    </div>
  );
}

export default OurStory;
