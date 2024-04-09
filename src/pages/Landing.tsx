import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import Hero from '../views/Hero/Hero';
const How = lazy(() => import('../views/Hero/How'));
const Partners = lazy(() => import('../views/Hero/Partners'));
const PartnersLower = lazy(() => import('../views/Hero/PartnersLower'));
const Tokens = lazy(() => import('../views/Hero/Tokens'));
const Worlds = lazy(() => import('../views/Hero/Worlds'));
const Stats = lazy(() => import('../components/Stats'));

const Landing: React.FC = () => {
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
        <Worlds id={'landing'} />
        <Stats />
        <How />
        <Partners />
        <Tokens id={'landing'} />
        <PartnersLower />
      </section>
    </motion.div>
  );
};

export default Landing;
