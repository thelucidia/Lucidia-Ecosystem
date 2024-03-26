import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

const Tournaments: React.FC = () => {
  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: <LiaTelegramPlane />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: <RxDiscordLogo />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: <BsTwitterX />,
    },
    {
      link: 'https://youtube.com/@lucidia_official',
      icon: <TfiWorld />,
    },
  ];

  return (
    <section className="w-full h-full p-[1px] text-white">
      <img
        src="/assets/app/games/desert.jpg"
        alt="devtools"
        className="absolute top-0 z-0 w-full h-screen object-cover"
      />
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-1"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-prpl/20 z-1"></div>
      <div className="container w-full h-auto mx-auto mt-[178px] relative">
        <div className="mx-auto flex flex-col gap-y-[110px]">
          <div className="flex flex-row gap-x-[80px]">
            <ul className="flex flex-col w-fit lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 sm:gap-y-12 gap-y-5 left-[10%] top-[30%]">
              {icons.map((items, i) => {
                return (
                  <li
                    className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan text-[32px]"
                    key={i}
                  >
                    <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                      {items.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
            <h1 className="xl:text-[62px] lg:text-[55px] md:text-[45px] sm:text-[35px] text-[25px] text-white font-primary max-w-[967px] pb-[30px] uppercase font-bold">
              Welcome to the Arena!
            </h1>
          </div>
          <div>
            <h3 className="text-[26px] font-primary font-semibold leading-normal pb-4 pl-[56px]">
              Upcoming Tournaments
            </h3>
            <img src="/assets/app/dao/sub_banner.svg" alt="sub_banner" />
          </div>
          <div className="max-w-[340px]">
            <div
              className="rounded-[10px] border-[2px] border-[#401675]"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
              }}
            >
              <div className="flex flex-col gap-y-[40px] pt-[50px] px-[25px] pb-[28px]">
                <img src="/assets/app/dao/logo.svg" alt="sub_logo" className="mb-4 mx-auto" width={80} height={92} />
                <h3 className="text-[18px] text-white font-semibold font-primary font-bold max-w-[243px]">
                  Attacking Enemies base: Desert Warriors
                </h3>
                <div className="w-full flex flex-row justify-between">
                  <div className="flex flex-row gap-x-[10px] items-center">
                    <img src="/assets/app/dao/lucidian.svg" alt="lucidian" width={30} height={30} />
                    <p className="font-secondary text-[16px] font-[400] text-white">Lucidian200</p>
                  </div>
                  <div className="flex flex-row gap-x-[10px]">
                    <div className="flex flex-row gap-x-1 items-center">
                      <img src="/assets/app/dao/viewed.svg" alt="viewed" width={20} height={20} />
                      <p className="text-[16px] font-[500] font-secondary text-white">50</p>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center">
                      <img src="/assets/app/dao/comments.svg" alt="comments" width={20} height={20} />
                      <p className="text-[16px] font-[500] font-secondary text-white">27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
