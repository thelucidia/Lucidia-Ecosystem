import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiTwitter } from 'react-icons/tfi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { RxDiscordLogo } from 'react-icons/rx';

const Marketplace: React.FC = () => {
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
  ];

  const our_products = [
    {
      title: 'play2earn',
      slug: 'play',
      desc: 'Earn $LUCID by participating in Lucidia games and achieving high scores',
      img: 'play.svg',
    },
    {
      title: 'nft integration',
      slug: 'nft',
      desc: 'Earn $LUCID by completing short courses offered by top universities and corporations in Lucidia',
      img: 'nft.svg',
    },
    {
      title: 'web 3 game',
      slug: 'web3',
      desc: 'Earn $LUCID by contributing to the development of AI within the Lucidia Metaverse',
      img: 'web3.svg',
    },
    {
      title: 'fit2earn',
      slug: 'fit',
      desc: 'Earn $LUCID by tracking calories burned through workout and competing in the leaderboard',
      img: 'fit.svg',
    },
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
        <div className="mx-auto flex flex-col gap-y-[125px]">
          <div
            className="rounded-[10px] border-[2px] border-[#401675] w-full relative"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
            }}
          >
            <div className="pl-[38px] py-[72px]">
              <h1 className=" text-[40px] text-white font-secondary max-w-[967px] pb-[30px] uppercase font-bold">
                Unlock Your Game Development Potential with Lucidia's Suite of Tools
              </h1>
              <h4 className=" text-[18px] text-white text-secondary font-bold max-w-[967px]">
                Explore our curated collection of developer tools designed to empower your game development journey.
                From innovative NFT integration kits to comprehensive marketplace solutions, each tool is crafted to
                enhance your projects and bring your creative visions to life. Dive into our tool cards below to
                discover how Lucidia can elevate your game development experience.
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[45px] gap-y-[17px]">
            {our_products.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-[10px] border-[2px] border-[#401675] max-w-[682px] max-h-[425px] relative"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                  }}
                >
                  <div className="pl-[52px] pt-[50px] pb-[166px]">
                    <img src={`/token/${item.img}`} alt={item.slug} className="mb-5" />
                    <h3 className="text-[36px] text-white uppercase font-primary font-bold">{item.title}</h3>
                    <h5 className="text-[20px] text-[#B4B6BF] text-primary font-semibold max-w-[458px]">{item.desc}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
