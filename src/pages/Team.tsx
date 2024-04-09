import React from 'react';
import { motion } from 'framer-motion';
import lazyDelayedImport from '../config/lazyDelayedImport';
const PartnersLower = lazyDelayedImport(() => import('../views/Hero/PartnersLower'));
const Members = lazyDelayedImport(() => import('../views/Team/Members'));
const Join = lazyDelayedImport(() => import('../views/Team/Join'));

const Team: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-auto overflow-hidden bg-bg"
    >
      <Members />
      <Join />
      <PartnersLower />
    </motion.div>
  );
};

export default Team;
