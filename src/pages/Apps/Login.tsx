import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiWorld } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';

const Login: React.FC = () => {
  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: () => <LiaTelegramPlane />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: () => <RxDiscordLogo />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: () => <BsTwitterX />,
    },
    {
      link: 'https://youtube.com/@lucidia_official',
      icon: () => <TfiWorld />,
    },
  ];

  return (
    <section className="w-full h-screen p-5 relative text-white flex md:items-center justify-center relative">
      <ul className="flex flex-col w-fit  absolute lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 sm:gap-y-12 gap-y-5 left-[10%]">
        {icons.map(({ icon: Icon, link }, i) => {
          return (
            <li className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan " key={i}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="">
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>

      <img src="/assets/app/games/login_bg.jpg" className="absolute top-0 z-0 w-full h-screen object-cover" />
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-1"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-prpl/20 z-1"></div>

      <div
        className="w-[697px] h-[367px]  rounded-[10px] border-[2px] border-[#401675] relative"
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
        }}
      >
        <div className="pt-11">
          <div className="mx-auto text-transparent font-bold text-center text-[40px] uppercase font-secondary bg-clip-text bg-gradient-to-r from-white via-[#D5B0FF] to-white w-fit">
            extra lucidia
          </div>
          <img
            src="/assets/app/games/login/metamask.svg"
            alt="extra lucida"
            width={'237px'}
            height={'44px'}
            className="mx-auto pt-[60px] pb-[20px]"
          />
          <img
            src="/assets/app/games/login/walletconnect.svg"
            alt="extra lucida"
            width={'237px'}
            height={'44px'}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
