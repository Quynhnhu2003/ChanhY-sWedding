// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import AnimatedSection from "../../../../ultils/components/Animation/AnimatedSection";

function InformationChildren() {
  return (
    <AnimatedSection
      animationType="zoomIn"
      delay={1.2}
      className={styles.childrenContainer}
    >
      <div className={styles.childrenContainer__groom}>
        <p>Phạm Nguyễn Minh Chánh</p>
        <span>Trưởng nam</span>
      </div>
      <p className={styles.childrenContainer__and}>&</p>
      <div className={styles.childrenContainer__bride}>
        <span>Út nữ</span>
        <p>Dương Ngọc Như Ý</p>
      </div>
    </AnimatedSection>
  );
}

export default InformationChildren;
