// ** styles Import
import styles from "./index.module.scss";

// ** Another Import
import TypingEffect from "../../ultils/components/TypingEffect";

const thankYouText: string[] = [
  "Chúng con cảm thấy thật may mắn khi hành trình yêu thương này luôn có gia đình và bạn bè đồng hành. Ngày hôm nay trở nên trọn vẹn và ý nghĩa hơn bao giờ hết nhờ sự hiện diện, những lời chúc phúc và tình cảm mà mọi người đã dành cho chúng con. Từng nụ cười, từng lời động viên, từng khoảnh khắc chung vui đều là món quà vô giá mà chúng con sẽ luôn trân trọng. Xin gửi lời cảm ơn chân thành đến tất cả đã trở thành một phần trong câu chuyện hạnh phúc của chúng con.",
];

function Footer() {
  return (
    <div className={styles["thankyou-container"]}>
      <div className={styles["thankyou-message"]}>
        <h2>Lời cảm ơn</h2>
        <TypingEffect strings={thankYouText} />

        <div className={styles.signature}>
          <span className={styles.signature__text}>Minh Chánh &amp; Như Ý</span>
        </div>
      </div>

      {/* Bong bóng */}
      {[...Array(15)].map((_, i) => (
        <span key={i} className={styles["bubble"]} />
      ))}
    </div>
  );
}

export default Footer;
