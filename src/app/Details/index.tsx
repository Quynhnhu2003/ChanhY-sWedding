// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import AnimatedSection from "../../ultils/components/Animation/AnimatedSection";
import CustomizeImg from "../../ultils/components/CustomizeImg";
import InformationChildren from "./components/InformationChildren";
import InformationParents from "./components/InformationParents";

function Details() {
  return (
    <div className={styles.detailsContainer}>
      <AnimatedSection animationType="slideInRight" delay={0.3}>
        <CustomizeImg src={"https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544764/wrapper__details_gfanys.jpg"} alt="banner" />
      </AnimatedSection>
      <div className={styles.detailsContainer__content}>
        <AnimatedSection
          animationType="fadeInUp"
          delay={0.3}
          className={styles.detailsContainer__header}
        >
          <CustomizeImg src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544751/chu-hy_fkhrkw.jpg" className={styles.detailsContainer__header__img} alt="banner" />
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
