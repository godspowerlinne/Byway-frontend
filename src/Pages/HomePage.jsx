import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";


const HomePage = () => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-3 px-[28px] lg:px-14 ">
        <HomeHero />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
