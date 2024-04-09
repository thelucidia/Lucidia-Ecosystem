import React from 'react';
import { motion } from 'framer-motion';
import lazyDelayedImport from '../config/lazyDelayedImport';
const Hero = lazyDelayedImport(() => import('../views/Hero/Hero'));
const PartnersLower = lazyDelayedImport(() => import('../views/Hero/PartnersLower'));
const Tokens = lazyDelayedImport(() => import('../views/Hero/Tokens'));
const Join = lazyDelayedImport(() => import('../views/OurPorducts/Join'));
const Stats = lazyDelayedImport(() => import('../components/Stats'));

const OurProduct: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-bg overflow-hidden"
    >
      <Hero id={'our-products'} />
      <Tokens id={'our-products'} />
      <Stats />
      <Join />
      <PartnersLower />
    </motion.div>
  );
};

export default OurProduct;
