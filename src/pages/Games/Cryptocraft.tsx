import React from 'react';
import PartnersLower from '../../views/Hero/PartnersLower';
import Banner from '../../views/Games/Cryptocraft/Banner';
import Unleash from '../../views/Games/Cryptocraft/Unleash';
import GameOverview from '../../views/Games/Cryptocraft/GameOverview';
import OtherGames from '../../views/Games/OtherGames';

const Cryptocraft: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <Unleash />
      <GameOverview />
      <OtherGames id={1} />
      <PartnersLower />
    </section>
  );
};
export default Cryptocraft;
