import React from 'react';
import { motion } from 'framer-motion';
import Members from '../views/Team/Members';
import PartnersLower from '../views/Hero/PartnersLower';

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
      <PartnersLower />
    </motion.div>
  );
};

export default Team;
