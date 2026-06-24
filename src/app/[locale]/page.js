import NavBar from '../components/navBar';
import Intro from '../components/Intro';
import About from '../components/About';
import FeaturesSection from '../components/Features';
import PricingTable from '../components/Pricingss';
import HomeBelowFold from '../components/HomeBelowFold';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <FeaturesSection />
      <PricingTable />
      <HomeBelowFold />
    </div>
  );
}
