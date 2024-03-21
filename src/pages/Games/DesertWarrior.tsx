import React from 'react';
import Banner from '../../views/Games/DesertWarrior/Banner';
import PartnersLower from '../../views/Hero/PartnersLower';
import Details from '../../views/Games/Curseof/Details';
import Survive from '../../views/Games/Curseof/Survive';
import OtherGames from '../../views/Games/OtherGames';

const Curse: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <Survive />
      <Details />
      <OtherGames />
      <PartnersLower />
    </section>
  );
};
export default Curse;
