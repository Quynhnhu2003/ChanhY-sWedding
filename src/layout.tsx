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
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544759/banner--countdown_qxgd5z.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544755/banner_gipbvz.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544751/chu-hy_fkhrkw.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544764/wrapper__details_gfanys.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544544/slide1_bnfvzj.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544665/slide2_xbzfrj.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544670/slide3_bkkx3o.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544675/slide4_zfzq8z.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544680/slide5_rbxgan.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544692/gallery-1_u0lnix.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544696/gallery-2_kpma4o.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544700/gallery-3_pxfpb5.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544709/gallery-4_r3eok2.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544703/gallery-5_lufdck.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544713/gallery-6_qsyi8z.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544718/gallery-7_mh80v2.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544722/gallery-8_luh046.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544725/gallery-9_tziyqu.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544729/gallery-10_iudfpc.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544733/gallery-11_vrhcl6.jpg",
      "https://res.cloudinary.com/dwcg5odh2/image/upload/v1756544736/gallery-12_zddyng.jpg",
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
