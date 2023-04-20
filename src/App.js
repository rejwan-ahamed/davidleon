import "./App.css";
import FAQs from "./Components/FAQs";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MainNavBar from "./Components/MainNavBar";
import PricingSection from "./Components/PricingSection";
import SecondaryFeatureSection from "./Components/SecondaryFeatureSection";
import Share from "./Components/Share";

function App() {
  return (
    <div className="App">
      <MainNavBar></MainNavBar>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <SecondaryFeatureSection></SecondaryFeatureSection>
      <Share></Share>
      <PricingSection></PricingSection>
      <FAQs></FAQs>
      <Footer></Footer>
    </div>
  );
}

export default App;
