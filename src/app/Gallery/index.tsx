// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import GallerySlider from "./components/GallerySlider";
import AnimatedSection from "../../ultils/components/Animation/AnimatedSection";
import CustomizeImg from "../../ultils/components/CustomizeImg";

const listImgGallery = [
  {
    id: 1,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544736/gallery-12_zddyng.jpg",
  },
  {
    id: 2,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544692/gallery-1_u0lnix.jpg",
  },
  {
    id: 3,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544700/gallery-3_pxfpb5.jpg",
  },
  {
    id: 7,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544713/gallery-6_qsyi8z.jpg",
  },
  {
    id: 8,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544718/gallery-7_mh80v2.jpg",
  },
  {
    id: 9,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544722/gallery-8_luh046.jpg",
  },
];

const listImgSlideGallery: { id: number; imgSrc: string }[] = [
  {
    id: 1,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544709/gallery-4_r3eok2.jpg", // ngang
  },
  {
    id: 2,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544696/gallery-2_kpma4o.jpg", // ngang
  },
  {
    id: 3,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544703/gallery-5_lufdck.jpg", // ngang
  },
  {
    id: 4,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544725/gallery-9_tziyqu.jpg",
  },
  {
    id: 5,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544729/gallery-10_iudfpc.jpg",
  },
  {
    id: 6,
    imgSrc: "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544733/gallery-11_vrhcl6.jpg",
  },
];

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.gallery__title}>Gallery</h2>
      <div className={styles.gallery__grid}>
        {listImgGallery.slice(0, 3).map((i, index) => (
          <AnimatedSection animationType="fadeInUp" delay={0.3} key={i.id + "-" + index} className={styles.gallery__item}>
            <CustomizeImg src={i.imgSrc} alt={`Wedding ${index + 1}`} className={styles.gallery__item__img} />
          </AnimatedSection>
        ))}

        <GallerySlider listImgGallery={listImgSlideGallery} />

        {listImgGallery.slice(-3).map((i, index) => (
          <AnimatedSection animationType="fadeInUp" delay={0.3} key={i.id + "-" + index} className={styles.gallery__item}>
            <CustomizeImg src={i.imgSrc} alt={`Wedding ${index + 1}`} className={styles.gallery__item__img} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
