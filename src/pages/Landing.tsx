import React from 'react';
import { motion } from 'framer-motion';
import lazyDelayedImport from '../config/lazyDelayedImport';
const Hero = lazyDelayedImport(() => import('../views/Hero/Hero'));
const How = lazyDelayedImport(() => import('../views/Hero/How'));
const Partners = lazyDelayedImport(() => import('../views/Hero/Partners'));
const PartnersLower = lazyDelayedImport(() => import('../views/Hero/PartnersLower'));
const Tokens = lazyDelayedImport(() => import('../views/Hero/Tokens'));
const Worlds = lazyDelayedImport(() => import('../views/Hero/Worlds'));
const Stats = lazyDelayedImport(() => import('../components/Stats'));

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
