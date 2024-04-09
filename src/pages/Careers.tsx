import React from 'react';
import { motion } from 'framer-motion';
import lazyDelayedImport from '../config/lazyDelayedImport';
const PartnersLower = lazyDelayedImport(() => import('../views/Hero/PartnersLower'));
const Banner = lazyDelayedImport(() => import('../views/Career/Banner'));
const Culture = lazyDelayedImport(() => import('../views/Career/Culture'));
const Journey = lazyDelayedImport(() => import('../views/Career/Journey'));

const Landing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-auto bg-black relative"
    >
      <Banner />
      <Culture />
      <Journey />
      <PartnersLower />
    </motion.div>
  );
};

export default Landing;
