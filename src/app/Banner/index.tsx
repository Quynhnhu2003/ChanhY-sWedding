// ** Styles Import
import styles from "./index.module.scss"; 

// ** Another Import
import AnimatedSection from "../../ultils/components/Animation/AnimatedSection";
const bannerImg = "/banner.JPG";
function Banner() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainer__banner}>
        <AnimatedSection animationType="zoomIn" delay={0.3}>
          <img src={bannerImg} alt="banner" />
        </AnimatedSection>
      </div>
      <AnimatedSection
        className={styles.headerContainer__content}
        animationType="staggerContainer"
      >
          <AnimatedSection
            className={styles.headerContainer__content__title}
            animationType="fadeInUp"
            delay={0.3}
          >
            <p>Lễ cưới của</p>
          </AnimatedSection>
          <AnimatedSection
            className={styles.headerContainer__content__text}
            animationType="fadeInUp"
            delay={0.6}
          >
            <p>Minh Chánh</p>
            <span>&</span>
            <p>Như Ý</p>
          </AnimatedSection>
          <AnimatedSection
            className={styles.headerContainer__content__datetime}
            animationType="fadeInUp"
            delay={0.9}
          >
            <span>Chủ Nhật, ngày 9 tháng 11 năm 2025</span>
            <span>Tại nhà hàng Hoà Bình 1</span>
          </AnimatedSection>
        </AnimatedSection>
    </div>
  );
}
export default Banner;
