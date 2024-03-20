import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PartnersLower from '../views/Hero/PartnersLower';
import Members from '../views/Team/Members';
import Join from '../views/Team/Join';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-black"
    >
      <section className="w-full h-auto overflow-hidden bg-bg">
        <Nav />
        <Members />
        <Join />
        <PartnersLower />
        <Footer />
      </section>
    </motion.div>
  );
};

export default Team;
