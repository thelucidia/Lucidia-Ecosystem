import React from 'react';
import Banner from '../../views/Games/DesertWarrior/Banner';
import PartnersLower from '../../views/Hero/PartnersLower';
import OtherGames from '../../views/Games/OtherGames';
import NewEra from '../../views/Games/DesertWarrior/NewEra';
import GameOverview from '../../views/Games/DesertWarrior/GameOverview';
import GameFeature from '../../views/Games/DesertWarrior/GameFeature';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const DesertWarrior: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Nav />
      <Banner />
      <NewEra />
      <GameOverview />
      <GameFeature />
      <OtherGames id={3} />
      <PartnersLower />
      <Footer />
    </section>
  );
};
export default DesertWarrior;
