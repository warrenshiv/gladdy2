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
import SearchSection from '../components/home/SearchSection';
import FeaturedStores from '../components/home/FeaturedStores';
import TopDeals from '../components/home/TopDeals';
import TopPicks from '../components/home/TopPicks';

function Home() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <SearchSection />
      <FeaturedStores />
      <TopDeals />
      <TopPicks />
      <HowItWorks />
      <TrustSafety />
      <GeographicCoverage />
      <CallToAction />
    </>
  );
}

export default Home;