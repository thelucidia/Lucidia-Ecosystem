import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg">
      <img
        src="/assets/images/games/crypto/crypto_bg01.jpg"
        alt="crypto"
        className="w-full h-screen object-cover absolute left-0 "
      />
      <div className="w-full sm:h-screen h-auto absolute top-0 left-0 bg-gradient-to-t from-black to-[#A5FF16D1]/20 z-10"></div>
      <div className="w-full sm:h-screen h-auto absolute top-0 left-0 bg-gradient-to-t from-black to-black/51% z-9 "></div>
      <div className="mt-[331px] flex items-center justify-end xs:justify-center mb-[287px] mr-[20px] flex-col gap-y-[50px] ">
        <img src="/assets/images/games/crypto/crypto.svg" className="relative" />
        <a
          href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="w-full lg:w-[15rem] relative">
            <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
              see details
            </div>
            <img src="/assets/images/game_button.png" alt="see_details" />
            {/* <div className="absolute bg-[#5e38b2] w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-bl"></div>
                <h1 className="font-secondary relative z-10 font-[700] text-[14px] scale-x-[-1] text-transparent group-hover:text-black bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#9586FF] to-[#0ED4FF]">
                  Launch App
                </h1> */}
          </div>
        </a>
      </div>
    </section>
  );
};
export default Banner;
