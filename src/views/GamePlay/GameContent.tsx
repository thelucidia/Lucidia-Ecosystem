import React from 'react';

const GameContent: React.FC = () => {
  return (
    <section className="w-full h-auto p-5 relative text-white flex md:items-center justify-center">
      <img
        src="/assets/images/games.jpg"
        alt="career-banner"
        className="w-full h-screen object-cover absolute top-0 left-0"
      />
      <div className="w-full sm:h-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black/20 to-[#0ED4FF4D]/30 z-10"></div>
      <div className="w-full sm:h-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-black/51% z-9 "></div>
      <div className="container w-full h-auto mx-auto relative z-10 flex mt-[7rem] md:mt-[12rem] flex flex-col relative gap-y-5 sm:pb-[200px] pb-0">
        <h1 className="max-w-[33rem] flex items-center font-primary leading-none w-auto uppercase text-[62px] 2xl:text-[72px] 2xl:leading-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A5FF16] via-[#0ED4FF] to-white">
          Curse of the pharaoh
        </h1>
        <h4 className="flex items-center mb-[20px] font-primary leading-normal w-auto uppercase text-[18px] font-semibold text-white pb-14">
          Featured Game
        </h4>
      </div>
      <img src="/hero/navline.webp" alt="Navline" className="absolute z-11 left-0 bottom-5 w-full xl:block hidden" />
    </section>
  );
};
export default GameContent;
