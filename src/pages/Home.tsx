import React from 'react';
import { 
 Hero, 
 ServiceCategories, 
 HowItWorks, 
 FeaturedVendors, 
 TrustSafety, 
 GeographicCoverage, 
 CallToAction 
} from '../components/home';

function Home() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <HowItWorks />
      <TrustSafety />
      <GeographicCoverage />
      <CallToAction />
    </>
  );
}

export default Home;