import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import HomeStatistic from "../Components/HomeStatistic";
import TopCategories from "../Components/TopCategories";
import TopCourses from "../Components/TopCourses";
import TopInstructors from "../Components/TopIntructors";
import CTA from "../Components/CTA";
import CustomersReviews from "../Components/CustomersReviews";


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
        <CustomersReviews/>
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
