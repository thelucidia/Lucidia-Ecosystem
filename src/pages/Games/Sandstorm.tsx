import React from 'react';
import Banner from '../../views/Games/Sandstorm/Banner';
import Journey from '../../views/Career/Journey';
import PartnersLower from '../../views/Hero/PartnersLower';
import Details from '../../views/Games/Sandstorm/Details';

const Sandstorm: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <Details />
      <Journey />
      <PartnersLower />
    </section>
  );
};
export default Sandstorm;
