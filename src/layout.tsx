import Banner from "./app/Banner";
import OurStory from "./app/Story";
import Details from "./app/Details";
import Countdown from "./app/Coundown";
import MapWedding from "./app/MapWedding";
import Footer from "./app/Footer";
import Gallery from "./app/Gallery";

function Layout() {
  return (
    <div className="layoutContainer">
      <Banner />
      <OurStory />
      <Gallery/>
      <Details />
      <Countdown />
      <MapWedding />
      <Footer />
    </div>
  );
}
export default Layout;
