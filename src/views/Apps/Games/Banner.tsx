import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CurseofVideo from '../../../../videos/curseof.mp4';

const Banner: React.FC = () => {
  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    setTimeout(() => {
      setTrueLoading(false);
    }, 1500);
  };

  return (
    <section className="w-full h-auto p-5 relative text-white flex md:items-center justify-center">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        src={CurseofVideo}
        preload={'auto'}
        onLoadedData={handleTrue}
        playsInline
        className="w-[68vw] h-[29vw] object-cover z-20 absolute top-[30%] clipped"
      />

      <img src="/assets/app/games/game_bg.jpg" className="absolute top-0 z-9 w-full h-screen object-cover" />
      <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-10"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/70 z-10"></div>

      <div className="max-w-[1400px] w-full h-auto mx-auto z-10 flex mt-[7rem] md:mt-[10rem] flex flex-col">
        <motion.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="w-full overflow-hidden flex"
        >
          <img
            src="/assets/images/games/curseof/curseofthe.svg"
            className="w-[55.8vw] pt-[180px] pb-[160px] mx-auto"
            alt="curseofthe"
          />
        </motion.div>
        <a
          href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto pb-[250px]"
        >
          <div className="w-full lg:w-[15rem] relative">
            <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
              see details
            </div>
            <img src="/assets/images/game_button.png" alt="see_details" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Banner;
