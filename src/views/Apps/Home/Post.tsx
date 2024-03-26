import { motion } from 'framer-motion';
import React from 'react';

const Detail: React.FC = () => {
  return (
    <section className={`w-full h-full relative bg-transparent z-20  my-[50px]`}>
      <div className="container w-full mx-auto h-full overflow-hidden px-5">
        <motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="container mx-auto flex flex-row gap-[80px] h-[350px] justify-between overflow-hidden"
        >
          <div className="w-[50%] h-auto bg-gry relative font-[500] scale-x-[-1]">
            <div className="w-full h-full bg-black/[97%] absolute top-0 left-0 z-10"></div>
            <div
              className="w-full h-[350px] bg-cover absolute top-0 left-0 z-9"
              style={{ backgroundImage: `url(/worlds/cyber.webp)` }}
            ></div>
          </div>
          <div className="w-[40%] h-auto bg-gry relative font-[500] scale-x-[-1]">
            <div className="scale-x-[-1] text-white w-full h-full">
              <div className="w-full h-[350px] bg-black/95 absolute top-0 left-0 z-10"></div>
              <div
                className="w-full h-full bg-cover absolute top-0 left-0 z-9"
                style={{ backgroundImage: `url(/worlds/zombie.webp)` }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Detail;
