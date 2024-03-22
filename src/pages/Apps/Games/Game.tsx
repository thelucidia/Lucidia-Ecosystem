import React from 'react';
import Banner from '../../../views/Apps/Games/Banner';
import PartnersLower from '../../../views/Hero/PartnersLower';
import P2EGames from '../../../views/Apps/Games/P2EGames';

const Game: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <P2EGames />
      <PartnersLower />
    </section>
  );
};
export default Game;
