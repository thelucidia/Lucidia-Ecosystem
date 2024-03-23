import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiTwitter } from 'react-icons/tfi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { RxDiscordLogo } from 'react-icons/rx';

const SupportHub: React.FC = () => {
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
      icon: <TfiTwitter />,
    },
    {
      link: 'https://youtube.com/@lucidia_official',
      icon: <AiOutlineYoutube />,
    },
    // {
    //   link: 'https://www.reddit.com/r/LucidiaMetaverse/',
    //   icon: <FaRedditAlien />,
    // },
    // {
    //   link: 'https://instagram.com/lucidia_official',
    //   icon: <FaInstagram />,
    // },
    // {
    //   link: 'https://www.tiktok.com/@lucidia.io',
    //   icon: <RiTiktokLine />,
    // },
  ];

  return (
    <section className="w-full h-screen p-[1px] relative text-white relative">
      <img src="/assets/app/games/login_bg.jpg" className="absolute top-0 z-0 w-full h-screen object-cover" />
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-1"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-prpl/20 z-1"></div>
      <ul className="flex flex-col w-fit fixed lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 sm:gap-y-12 gap-y-5 left-[10%] top-[30%]">
        {icons.map((items, i) => {
          return (
            <li className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan " key={i}>
              <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                {items.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="max-w-[1400px] w-full h-auto m-auto mt-[178px] relative">
        <div className="mx-auto flex flex-row justify-between">
          <div className="flex flex-col justify-between gap-y-[18px]">
            <div
              className="rounded-[10px] border-[2px] border-[#401675] max-w-[697px] relative"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
              }}
            >
              <div className="pl-[24px] pr-[160px] py-[48px]">
                <h1 className=" text-[40px] text-white font-secondary max-w-[514px] font-bold">
                  Welcome to the Web3 Gaming Education Portal
                </h1>
                <h4 className=" text-[18px] text-white text-secondary font-bold">
                  Your Gateway to the World of Web3 Gaming
                </h4>
                <a
                  href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="w-full lg:w-[15rem] relative mt-[80px]">
                    <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
                      see details
                    </div>
                    <img src="/assets/images/game_button.png" alt="see_details" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-x-[18px]">
              <div
                className="rounded-[10px] border-[2px] border-[#401675] max-w-[339px] relative"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                }}
              >
                <div className="pl-[24px] pt-[140px] pr-[105px] pb-[22px]">
                  <h3 className="text-[26px] text-white font-secondary max-w-[214px] font-bold">About Us</h3>
                  <h5 className="text-[16px] text-white text-secondary font-bold max-w-[206px]">
                    We are passionate about Web3 gaming and are committed to providing you with valuable resources to
                    demystify this exciting world.
                  </h5>
                </div>
              </div>
              <div
                className="rounded-[10px] border-[2px] border-[#401675] max-w-[339px] relative"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                }}
              >
                <div className="pl-[24px] pt-[140px] pr-[105px] pb-[22px]">
                  <h3 className="text-[26px] text-white font-secondary max-w-[214px] font-bold">Coming Soon!</h3>
                  <h5 className="text-[16px] text-white text-secondary font-bold max-w-[206px]">
                    Our team is working tirelessly to bring you tutorials, articles, videos, and much more to help you
                    navigate Web3 gaming. Stay tuned!
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/app/games/edu/gamer.png" className=" z-10 absolute bottom-0 w-[744px] h-[752px] right-0" />
          <div
            className="relative w-[552px] h-auto rounded-[10px] border-[2px] border-[#401675]"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SupportHub;
