import Banner from "./app/Banner";
import OurStory from "./app/Story";
import Details from "./app/Details";
import Countdown from "./app/Coundown";
import MapWedding from "./app/MapWedding";
import Footer from "./app/Footer";
import Gallery from "./app/Gallery";
import WelcomeScreen from "./app/WelcomeScreen";
import { Fragment, useState } from "react";

function Layout() {
  const [entered, setEntered] = useState<boolean>(false);

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
