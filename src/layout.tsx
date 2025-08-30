import Banner from "./app/Banner";
import OurStory from "./app/Story";
import Details from "./app/Details";
import Countdown from "./app/Coundown";
import MapWedding from "./app/MapWedding";
import Footer from "./app/Footer";
import Gallery from "./app/Gallery";
import WelcomeScreen from "./app/WelcomeScreen";
import { Fragment, useEffect, useState } from "react";

function Layout() {
  const [entered, setEntered] = useState<boolean>(false);


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

  return (
    <div className="layoutContainer">
      {!entered ? (
        <WelcomeScreen onEnter={() => setEntered(true)} />
      ) : (
        <Fragment>
          <Banner />
          <OurStory />
          <Gallery />
          <Details />
          <Countdown />
          <MapWedding />
          <Footer />
        </Fragment>
      )}
    </div>
  );
}
export default Layout;
