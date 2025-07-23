import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import Explore from '../Components/Explore';
import NewArrivals from '../Components/NewArrivals';
import We from '../Components/We';
import Men from '../Components/Men';
import Women from '../Components/Women';
import Brand from '../Components/Brand';
import LimeLight from '../Components/LimeLight';
import FeedBack from '../Components/FeedBack';


function Home() {
  return (
    <>
      <HeroSlider/>
      <Explore />
      <NewArrivals />
      <We />
      <Men />
      <Women />
      <Brand />
      <LimeLight />
      <FeedBack />
    </>
  );
}

export default Home;
