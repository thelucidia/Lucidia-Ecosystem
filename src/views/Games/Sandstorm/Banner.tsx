import { motion } from 'framer-motion';
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="w-full h-auto p-5 relative text-white flex md:items-center justify-center">
      <img
        src="/assets/images/games/sandstorm/stormracer_banner.jpg"
        alt="career-banner"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/80 to-black/10% z-9 "></div>
      <div className="w-full h-full absolute top-0 left-0 bg-[#7700FF33]/20 z-10"></div>

      <div className="max-w-[1400px] h-auto mx-auto z-10 flex mt-[7rem] md:mt-[10rem] flex flex-col ">
        <motion.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="w-full overflow-hidden flex"
        >
          {/* <h1 className="flex items-center font-secondary 2xl:min-w-[750px] leading-normal w-auto uppercase text-3xl md:text-5xl 2xl:text-[72px] 2xl:leading-[5.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#9586FF] to-[#0ED4FF] 2xl:mb-[18rem] lg:mb-[10rem] md:mb-[6rem] sm:mb-[4rem] mb-[2rem]">
            sandstorm racers
          </h1> */}
          <img
            src="/assets/images/games/sandstorm/sandstormracer.svg"
            className="w-[55.8vw] pt-[250px] pb-[80px]"
            alt="sandstorm"
          />
        </motion.div>
        <a
          href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto pb-[140px]"
        >
          <div className="w-full lg:w-[15rem] relative">
            <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
              see details
            </div>
            <img src="/assets/images/game_button.png" alt="see_details" />
          </div>
        </a>
      </div>
      {/* <img src="/hero/navline.webp" alt="Navline" className="absolute z-11 left-0 bottom-5 w-full xl:block hidden" /> */}
    </section>
  );
};

export default Banner;
