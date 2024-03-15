import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PartnersLower from '../views/Hero/PartnersLower';
import Banner from '../views/Career/Banner';
import Culture from '../views/Career/Culture';
import Journey from '../views/Career/Journey';

const Landing = () => {
  return (
    <section className="w-full h-auto bg-black relative">
      <Nav />
      <Banner />
      <Culture />
      <Journey />
      <PartnersLower />
      <Footer />
    </section>
  );
};

export default Landing;
