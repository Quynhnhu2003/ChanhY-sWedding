// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import GallerySlider from "./components/GallerySlider";
import AnimatedSection from "../../ultils/components/Animation/AnimatedSection";
import CustomizeImg from "../../ultils/components/CustomizeImg";

const listImgGallery = [
  {
    id: 1,
    imgSrc: "/gallery/gallery_12.jpg",
  },
  {
    id: 2,
    imgSrc: "/gallery/gallery-1.jpg",
  },
  {
    id: 3,
    imgSrc: "/gallery/gallery-3.jpg",
  },
  {
    id: 7,
    imgSrc: "/gallery/gallery-6.jpg",
  },
  {
    id: 8,
    imgSrc: "/gallery/gallery-7.jpg",
  },
  {
    id: 9,
    imgSrc: "gallery/gallery-8.jpg",
  },
];

const listImgSlideGallery: { id: number; imgSrc: string }[] = [
  {
    id: 1,
    imgSrc: "/gallery/gallery-4.jpg", // ngang
  },
  {
    id: 2,
    imgSrc: "/gallery/gallery-2.jpg", // ngang
  },
  {
    id: 3,
    imgSrc: "/gallery/gallery-5.jpg", // ngang
  },
  {
    id: 4,
    imgSrc: "/gallery/gallery-9.jpg",
  },
  {
    id: 5,
    imgSrc: "/gallery/gallery-10.jpg",
  },
  {
    id: 6,
    imgSrc: "/gallery/gallery-11.jpg",
  },
];

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.gallery__title}>Gallery</h2>
      <div className={styles.gallery__grid}>
        {listImgGallery.slice(0, 3).map((i, index) => (
          <AnimatedSection animationType="fadeInUp" delay={0.3} key={i.id + "-" + index} className={styles.gallery__item}>
            <CustomizeImg src={i.imgSrc} alt={`Wedding ${index + 1}`} />
          </AnimatedSection>
        ))}

        <GallerySlider listImgGallery={listImgSlideGallery} />

        {listImgGallery.slice(-3).map((i, index) => (
          <AnimatedSection animationType="fadeInUp" delay={0.3} key={i.id + "-" + index} className={styles.gallery__item}>
            <CustomizeImg src={i.imgSrc} alt={`Wedding ${index + 1}`} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
