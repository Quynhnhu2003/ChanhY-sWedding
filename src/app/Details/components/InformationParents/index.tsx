// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import AnimatedSection from "../../../../ultils/components/Animation/AnimatedSection";

function InformationParents() {
  return (
    <AnimatedSection
      animationType="fadeInUp"
      delay={0.6}
      className={styles.parentsContainer}
    >
      <div className={styles.parentsContainer__groom}>
        <p>Ông.Bà</p>
        <p>Phạm Thế Hiển</p>
        <p>Nguyễn Thị Trúc Hằng</p>
        <span>Bình Đức, Tp.Long Xuyên, tỉnh An Giang</span>
      </div>
      <div className={styles.parentsContainer__bride}>
        <p>Ông.Bà</p>
        <p>Dương Văn Phi</p>
        <p>Nguyễn Thị Mum</p>
        <span>Ấp Bình Thạnh 2, X.Hoà An, H.Chợ Mới, An Giang</span>
      </div>
    </AnimatedSection>
  );
}

export default InformationParents;
