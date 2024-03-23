import React from 'react';
import PartnersLower from '../../views/Hero/PartnersLower';
import Banner from '../../views/Games/Cryptocraft/Banner';
import OtherGames from '../../views/Games/OtherGames';
import Unleash from '../../views/Games/Cryptocraft/Unleash';
import GameOverview from '../../views/Games/Cryptocraft/GameOverview';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Cryptocraft: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Nav />
      <Banner />
      <Unleash />
      <GameOverview />
      <OtherGames id={1} />
      <PartnersLower />
      <Footer />
    </section>
  );
};
export default Cryptocraft;
