// ** styles Import
import AnimatedSection from "../../ultils/components/Animation/AnimatedSection";
import styles from "./index.module.scss";

// ** Another Import

function MapWedding() {
  return (
    <div className={styles.mapWedding}>
      <h1 className={styles.mapWedding__header}>Địa chỉ nhà hàng</h1>
      <AnimatedSection animationType="zoomIn" delay={0.3}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.4371574089414!2d105.4330706!3d10.3868114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a72e83606f81f%3A0xdbd9259d4c57cd7e!2zS2jDoWNoIHPhuqFuIEjDsmEgQsOsbmggMQ!5e0!3m2!1svi!2s!4v1756125260342!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0, marginTop: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AnimatedSection>
    </div>
  );
}

export default MapWedding;
