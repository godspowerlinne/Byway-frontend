import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import HomeStatistic from "../Components/HomeStatistic";
import TopCategories from "../Components/TopCategories";
import TopCourses from "../Components/TopCourses";
import TopInstructors from "../Components/TopIntructors";


const HomePage = () => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-3 px-[28px] lg:px-14 ">
        <HomeHero />
        <HomeStatistic />
        <TopCategories />
        <TopCourses/>
        <TopInstructors/>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
