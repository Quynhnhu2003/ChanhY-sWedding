import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

type GalleryProps = {
  listImgGallery: { id: number; imgSrc: string }[];
};

export default function GallerySlider({ listImgGallery }: GalleryProps) {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        loop={true}
        speed={9000}
        autoplay={{
          delay: 0,
        }}
      >
        {listImgGallery.map((i, index) => (
          <SwiperSlide
            key={i.id + "-" + index}
            style={{ width: "auto" }} // rất quan trọng để tính toán auto
          >
            <img
              src={i.imgSrc}
              alt={`Wedding ${index + 1}`}
              style={{
                height: "200px",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
