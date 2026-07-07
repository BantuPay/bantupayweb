import NavBar from '../components/navBar';
import Intro from '../components/Intro';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import FeaturesSection from '../components/Features';
import PricingTable from '../components/Pricingss';
import HomeBelowFold from '../components/HomeBelowFold';
import SiteMotion from '../components/SiteMotion';

export default function HomePage() {
  return (
    <div id="bp-root" className="bp-root">
      <div className="bp-bg" aria-hidden="true">
        <div className="bp-bg-dots" />
        <div className="bp-orb" />
        <div className="bp-orb2" />
      </div>

      <NavBar />
      <Intro />
      <HowItWorks />
      <About />
      <FeaturesSection />
      <PricingTable />
      <HomeBelowFold />

      <SiteMotion />
    </div>
  );
}
