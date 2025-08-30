// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useEffect, useState } from "react";

export default function WelcomeScreen({ onEnter }: { onEnter: any }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const images = [
      "/banner--countdown.jpg",
      "/banner.jpg",
      "/chu-hy.jpg",
      "/wrapper__details.jpg",
      "/slide/slide1.JPG",
      "/slide/slide2.JPG",
      "/slide/slide3.JPG",
      "/slide/slide4.jpg",
      "/slide/slide5.JPG",
      "/gallery/gallery-1.jpg",
      "/gallery/gallery-2.jpg",
      "/gallery/gallery-3.jpg",
      "/gallery/gallery-4.jpg",
      "/gallery/gallery-5.jpg",
      "/gallery/gallery-6.jpg",
      "/gallery/gallery-7.jpg",
      "/gallery/gallery-8.jpg",
      "/gallery/gallery-9.jpg",
      "/gallery/gallery-10.jpg",
      "/gallery/gallery-11.jpg",
      "/gallery/gallery-12.jpg",
    ];
  
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      onEnter && onEnter(); // Callback hiển thị nội dung chính
    }, 15000); // delay trùng animation
  };

  return (
    <div className={styles.welcomeScreen}>
      <div
        className={`${styles.envelope} ${opened ? styles.open : ""}`}
        onClick={handleOpen}
      >
        <img
          src="https://i.pinimg.com/736x/5d/29/9c/5d299cc409da970cc3e319ff4288543a.jpg"
          alt="Envelope"
          className={styles.envelopeImg}
        />
        <div className={styles.letter}>
          <span>
            Ngày cưới là khoảnh khắc đặc biệt trong đời chúng con, và thật ý
            nghĩa khi có mọi người cùng chia sẻ. Sự góp mặt của gia đình và bạn
            bè chính là niềm vui lớn nhất với chúng con.
          </span>
          <p>
            Cảm ơn vì đã luôn ở bên và mong được gặp mọi người trong ngày hạnh
            phúc này!
          </p>
          <div className={styles.signature}>
          <span className={styles.signature__text}>Minh Chánh &amp; Như Ý</span>
        </div>
        </div>
      </div>
    </div>
  );
}
