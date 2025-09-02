// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useEffect, useState } from "react";
import AnimatedSection from "../../ultils/components/Animation/AnimatedSection";
import CustomizeImg from "../../ultils/components/CustomizeImg";

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function Countdown() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const targetDate = new Date("2025-11-09T11:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <AnimatedSection animationType="zoomIn" delay={0.3} className={styles.countdownContainer__imageWrapper}>
        <CustomizeImg src="https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544759/banner--countdown_qxgd5z.jpg" alt="banner" />
      </AnimatedSection>

      <AnimatedSection
        className={styles.countdownContainer__content}
        animationType="staggerContainer"
      >
        <AnimatedSection
          animationType="fadeInUp"
          delay={0.3}
          className={styles.countdownContainer__content__header}
        >
          Đếm ngược đến ngày cưới
        </AnimatedSection>

        <AnimatedSection
          animationType="fadeInUp"
          delay={0.3}
          className={styles.countdownContainer__content__countdown}
        >
          <div className={styles.countdownContainer__content__time}>
            <p>{timeLeft.days}</p>
            <span>Ngày</span>
          </div>

          <div className={styles.countdownContainer__content__time}>
            <p>{timeLeft.hours}</p>
            <span>Giờ</span>
          </div>

          <div className={styles.countdownContainer__content__time}>
            <p>{timeLeft.minutes}</p>
            <span>Phút</span>
          </div>

          <div className={styles.countdownContainer__content__time}>
            <p>{timeLeft.seconds}</p>
            <span>Giây</span>
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}

export default Countdown;
