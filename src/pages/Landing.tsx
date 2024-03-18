import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../views/Hero/Hero';
import How from '../views/Hero/How';
import Partners from '../views/Hero/Partners';
import PartnersLower from '../views/Hero/PartnersLower';
import PartnersUpper from '../views/Hero/PartnersUpper';
import Tokens from '../views/Hero/Tokens';
import Worlds from '../views/Hero/Worlds';

const Landing = () => {
  return (
    <section className="w-full h-auto bg-black relative">
      <Nav />
      <Hero id={'hero'} />
      <PartnersUpper />
      <Worlds />
      <How />
      <Partners />
      <Tokens />
      <PartnersLower />
      <Footer />
    </section>
  );
};

export default Landing;
