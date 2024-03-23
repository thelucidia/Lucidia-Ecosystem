import React from 'react';
import Banner from '../../views/Games/Curseof/Banner';
import PartnersLower from '../../views/Hero/PartnersLower';
import Details from '../../views/Games/Curseof/Details';
import Survive from '../../views/Games/Curseof/Survive';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Curse: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Nav />
      <Banner />
      <Survive />
      <Details />
      <PartnersLower />
      <Footer />
    </section>
  );
};
export default Curse;
