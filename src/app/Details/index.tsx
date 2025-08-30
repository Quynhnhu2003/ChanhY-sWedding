// ** styles Import
import AnimatedSection from "../../ultils/components/Animation/AnimatedSection";
import InformationChildren from "./components/InformationChildren";
import InformationParents from "./components/InformationParents";
import styles from "./index.module.scss";

// ** Another Import

const img = "/chu-hy.jpg";

function Details() {
  return (
    <div className={styles.detailsContainer}>
      <AnimatedSection animationType="slideInRight" delay={0.3}>
        <img src={"/wrapper__details.jpg"} alt="banner" />
      </AnimatedSection>
      <div className={styles.detailsContainer__content}>
        <AnimatedSection
          animationType="fadeInUp"
          delay={0.3}
          className={styles.detailsContainer__header}
        >
          <img src={img} alt="banner" />
        </AnimatedSection>

        <InformationParents />

        <AnimatedSection
          animationType="fadeInUp"
          delay={0.9} className={styles.detailsContainer__text}>
          Trân trọng báo tin lễ cưới của con chúng tôi
        </AnimatedSection>
        
        <InformationChildren />
      </div>
    </div>
  );
}

export default Details;
