import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface IWorld {
  id: string;
}

const Worlds = ({ id }: IWorld) => {
  const flag = id === 'landing';

  const worldList = [
    {
      title: 'curse of the pharaoh',
      desc: 'Pulse-pounding action, earn $LUCID Tokens, crush undead hordes, ultimate survival.',
      image: 'zombie',
      path: '/gameplay/curse-of-the',
    },
    {
      title: 'cryptocraft',
      desc: 'Shape limitless worlds, earn $LUCID Tokens, unleash creativity, adventure awaits!',
      image: 'minecraft',
      path: '/gameplay/cryptocraft',
    },
    {
      title: 'sandstorm racers',
      desc: 'Take a ride through the night skyline, race with your friends and attend virtual events',
      image: 'cyber',
      path: '/gameplay/sandstorm',
    },
    {
      title: 'desert warriors',
      desc: 'Engage in the battle and complete missions to earn $LUCID Tokens.',
      image: 'fps',
      path: '/gameplay/desert',
    },
    // {
    //   title: 'embryo lab',
    //   desc: 'Use the power of AI to grow your unique NFT Lucidia Embryo.',
    //   image: 'lab',
    // },
    // {
    //   title: 'Eco city',
    //   desc: 'Roam through the city, go shopping for your avatar or just hang in your virtual property',
    //   image: 'eco',
    // },
  ];

  const comingsoon = [
    {
      title: 'embryo lab',
      image: 'lab',
    },
    {
      title: 'Eco city',
      image: 'eco',
    },
    {
      title: 'tekcida',
      image: 'tekcida',
    },
    {
      title: 'nft racing',
      image: 'nftracing',
    },
  ];

  const stats = [
    {
      title: '$420k',
      desc: 'In Rewards No.1 MLN',
    },
    {
      title: '15',
      desc: 'MLN In Game Assets',
    },
    {
      title: '4+',
      desc: 'Game Inside Metaverse',
    },
    {
      title: '20',
      desc: 'maps',
    },
  ];

  return (
    <section className="w-full h-auto min-h-screen sm:bg-bg bg-transparent relative">
      <div className="px-5 py-5">
        <div className="max-w-[1400px] w-full mx-auto h-auto sm:mt-11">
          <div className="w-fit max-w-[1400px] mx-auto">
            {flag && (
              <h1 className="font-medium text-transparent text-2xl sm:text-3xl md:text-4xl font-primary bg-clip-text bg-gradient-to-r from-[#e4d3fe] via-white to-lavender w-fit 2xl:text-left text-center mx-0 sm:mx-auto 2xl:mx-0">
                Free2Play Open Worlds
              </h1>
            )}
            {!flag && (
              <h1 className="font-medium text-transparent text-2xl sm:text-3xl md:text-4xl font-primary w-fit bg-clip-text bg-gradient-to-r from-[#A5FF16] via-[#0ED4FF] to-white text-left sm:block hidden">
                All Games You Can Play!
              </h1>
            )}

            <div className="flex flex-wrap gap-3 mt-12 items-center justify-between w-fit overflow-hidden">
              {worldList.map((items, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ x: 150 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70 }}
                    className=""
                  >
                    <Link to={items.path}>
                      <div
                        key={i}
                        className="w-[21rem] h-[26rem] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                      >
                        <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                          <img
                            src={`/worlds/${items.image}.webp`}
                            alt={items.title}
                            className="object-cover absolute w-full h-full"
                          />

                          <div className=" shadow-world w-full h-full relative z-10"></div>

                          <div
                            className={`transition-shadow ease-in-out duration-500 ${flag ? `group-hover:shadow-worldHover` : `group-hover:shadow-gameHover`}  w-full h-full top-0 left-0 absolute z-10`}
                          ></div>

                          <div className="absolute bottom-4 left-4 z-10 p-3 group-hover:text-black text-white ease-in-out duration-[0.1s]">
                            <h1 className="uppercase font-primary text-2xl tracking-wide group-hover:mb-2 transition-all">
                              {items.title}
                            </h1>
                            <div className="overflow-hidden max-h-0 group-hover:max-h-[3rem] transition-all">
                              <p className="font-medium font-primary">{items.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
              {comingsoon.map((items, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ x: -150 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70 }}
                    className=""
                  >
                    <div
                      key={i}
                      className="w-[21rem] h-[26rem] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                    >
                      <div className="scale-x-[-1] relative w-full h-full group ">
                        <img
                          src={`/worlds/${items.image}.webp`}
                          alt={items.title}
                          className="object-cover absolute w-full h-full"
                        />

                        <div className="bg-black bg-opacity-95 backdrop-filter backdrop-blur-9.5 w-full h-full top-0 left-0 absolute z-10"></div>
                        <img
                          src="/worlds/coming.webp"
                          alt="Coming soon"
                          className="absolute top-0 left-0 right-0 bottom-10 m-auto w-[8rem] z-10"
                        />
                        <div className="absolute bottom-4 left-4 z-10 p-3 text-white/40">
                          <h1 className="uppercase font-primary text-2xl tracking-wide">{items.title}</h1>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {flag && (
        <div className="w-full h-auto bg-prpl py-14 mt-24 font-secondary">
          <div className="flex mx-auto w-fit sm:gap-x-24 flex-wrap justify-between sm:justify-center px-3 gap-y-10 md:text-left text-center">
            {stats.map((items, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ y: -50 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className=""
                >
                  <div className="" key={i}>
                    <h1 className="text-5xl sm:text-[54px] font-bold text-center">{items.title}</h1>
                    <p className="font-semibold uppercase sm:text-base text-sm">{items.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Worlds;
