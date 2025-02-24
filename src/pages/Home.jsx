import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import NewletterBox from "../components/NewletterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <OurPolicy />
      <NewletterBox />
    </>
  );
};

export default Home;
