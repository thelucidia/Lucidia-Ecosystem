import React from 'react';
import { motion } from 'framer-motion';
import lazyDelayedImport from '../config/lazyDelayedImport';
const GameContent = lazyDelayedImport(() => import('../views/GamePlay/GameContent'));
const Worlds = lazyDelayedImport(() => import('../views/Hero/Worlds'));
const Join = lazyDelayedImport(() => import('../views/GamePlay/Join'));
const Benefits = lazyDelayedImport(() => import('../views/GamePlay/Benefits'));
const PartnersLower = lazyDelayedImport(() => import('../views/Hero/PartnersLower'));

const GamePlay: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-full overflow-hidden bg-bg"
    >
      <GameContent />
      <Worlds id={'gameplay'} />
      <Join />
      <Benefits />
      <PartnersLower />
    </motion.div>
  );
};
export default GamePlay;
