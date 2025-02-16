import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import HomeStatistic from "../Components/HomeStatistic";
import TopCategories from "../Components/TopCategories";


const HomePage = () => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-3 px-[28px] lg:px-14 ">
        <HomeHero />
        <HomeStatistic />
        <TopCategories />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
