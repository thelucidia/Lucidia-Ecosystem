import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PartnersLower from '../views/Hero/PartnersLower';
import Banner from '../views/Career/Banner';
import Culture from '../views/Career/Culture';
import Journey from '../views/Career/Journey';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-auto bg-black relative"
    >
      <Nav />
      <Banner />
      <Culture />
      <Journey />
      <PartnersLower />
      <Footer />
    </motion.div>
  );
};

export default Landing;
