import React from 'react';
import Banner from '../../views/Games/DesertWarrior/Banner';
import PartnersLower from '../../views/Hero/PartnersLower';
import OtherGames from '../../views/Games/OtherGames';
import NewEra from '../../views/Games/DesertWarrior/NewEra';
import GameOverview from '../../views/Games/DesertWarrior/GameOverview';
import GameFeature from '../../views/Games/DesertWarrior/GameFeature';

const Curse: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <NewEra />
      <GameOverview />
      <GameFeature />
      <OtherGames />
      <PartnersLower />
    </section>
  );
};
export default Curse;
