import Hero from '../views/Hero/Hero';
import How from '../views/Hero/How';
import Partners from '../views/Hero/Partners';
import PartnersLower from '../views/Hero/PartnersLower';
import PartnersUpper from '../views/Hero/PartnersUpper';
import Tokens from '../views/Hero/Tokens';
import Worlds from '../views/Hero/Worlds';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-black"
    >
      <section className="w-full h-auto bg-black relative">
        <Hero id={'landing'} />
        <PartnersUpper />
        <Worlds id={'landing'} />
        <How />
        <Partners />
        <Tokens id={'landing'} />
        <PartnersLower />
      </section>
    </motion.div>
  );
};

export default Landing;
