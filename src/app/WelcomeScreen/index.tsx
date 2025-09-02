// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useState, useEffect } from "react";

function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  // ** State
  const [opened, setOpened] = useState<boolean>(false);
  const [entered, setEntered] = useState<boolean>(false);

  // ** useEffect
  useEffect(() => {
    // Sau 20s nếu chưa bấm thì tự động vào
    if (opened && !entered) {
      const timer = setTimeout(() => {
        handleEnter();
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [opened, entered]);

  // ** Function
  const handleOpenOrEnter = () => {
    if (!opened) {
      setOpened(true);
    } else if (!entered) {
      handleEnter();
    }
  };

  const handleEnter = () => {
    setEntered(true);
    onEnter && onEnter();
  };

  return (
    <div className={styles.welcomeScreen} onClick={handleOpenOrEnter}>
      <div className={`${styles.envelope} ${opened ? styles.open : ""}`}>
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
            <span className={styles.signature__text}>
              Minh Chánh &amp; Như Ý
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;