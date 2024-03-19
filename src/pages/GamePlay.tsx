import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GameContent from '../components/GameContent';
import Worlds from '../views/Hero/Worlds';
import Join from '../views/GamePlay/Join';
import Benefits from '../views/GamePlay/Benefits';
import PartnersLower from '../views/Hero/PartnersLower';
import { motion } from 'framer-motion';

const GamePlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-black"
    >
      <section className="w-full h-full overflow-hidden bg-bg">
        <Nav />
        <GameContent />
        <Worlds id={'gameplay'} />
        <Join />
        <Benefits />
        <PartnersLower />
        <Footer />
      </section>
    </motion.div>
  );
};
export default GamePlay;
