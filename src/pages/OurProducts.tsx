import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../views/Hero/Hero';
import PartnersLower from '../views/Hero/PartnersLower';
import PartnersUpper from '../views/Hero/PartnersUpper';
import Tokens from '../views/Hero/Tokens';
import { motion } from 'framer-motion';
import Join from '../views/OurPorducts/Join';
import Stats from '../views/OurPorducts/Stats';

const OurProduct = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-black"
    >
      <Nav />
      <Hero id={'our-products'} />
      <PartnersUpper />
      <Tokens id={'our-products'} />
      <Stats />

      <Join />
      <PartnersLower />
      <Footer />
    </motion.div>
  );
};

export default OurProduct;
