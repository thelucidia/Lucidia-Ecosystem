import { motion } from 'framer-motion';
import React from 'react';

const SandContent: React.FC = () => {
  const data = [
    {
      title: 'Story and Narrative',
      value: [
        <p>
          Lucidcraft's narrative is a canvas painted by its players. Embark on a journey through a world imbued with
          lore, uncover ancient secrets, and for geyour own stories.
        </p>,
      ],
    },
    {
      title: 'World and Environment',
      value: [
        <p>
          The heart of Lucidcraft is its procedurally generated landscapes, offering a unique blend of biomes and
          ecosystems that react to your every move, ensuring no two adventures are the same.
        </p>,
      ],
    },
    {
      title: 'Characters and Progression',
      value: [
        <p>
          <span className="text-[#70F]">Player Avatars: </span>
          <span>
            Express your individuality with customizable avatars. Stand out with rare NFT items that showcase your
            achievements and style.
          </span>
        </p>,
        <p>
          <span>NPCs and Wildlife: </span>
          <span>
            The world of Lucidcr aftteems with life. Interact with friendly NPCs and encounter diverse wildlife that
            adds depth to the game's vibrant ecosystems.
          </span>
        </p>,
      ],
    },
    {
      title: <span className="text-[#70F]">Level Design</span>,
      value: [
        <p>
          Lucidcraft's worlds are amasterpiece of procedural generation, offering limitless explorationop portunities.
          Each biome is a new frontier, rich in resources and challenges. Art Direction Lucidcraft's voxel-based art
          style is a tribute to classic sandbox games, enhanced with vibrant colors and intricate details that bring its
          dynamic world to life.
        </p>,
      ],
    },
    {
      title: <span className="text-[#70F]">Sound Design</span>,
      value: [
        <p>
          Immerse yourself in Lucidcraft's dynamic soundscape, where the music and ambient sounds evolve with your
          journey, enhancing every moment of your adventure. Technical Spesification Built with a custom engine
          optimized for voxel rendering and Web3 integration, Lucidcraft offers a seamless blend of expansive gameplay
          and blockchain functionality.
        </p>,
      ],
    },
    {
      title: <span className="text-[#A5FF16]">Accessibility</span>,
      value: [
        <p>
          Lucidcraft is a universe for everyone. Enjoy a wide range of accessibility features ensuring that all
          adventurers, regardless of their playstyle or abilities, can fully engage in the world of Lucidcraft.
        </p>,
        <p>PC and mobile grey out</p>,
        <p>Join The World of Lucidcraft</p>,
        <p>
          Are you ready to shape a world limited only by your imagination? In Lucidcraft, every block placed, every
          journey taken, and every creation crafted contributes to the legacy of this ever-evolving universe.
        </p>,
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen relative py-10">
      <div className="w-full h-full overflow-hidden px-5">
        <img
          src="/assets/images/games/crypto/coin.svg"
          alt="coin"
          className="absolute top-[150px] lg:block hidden w-fit y-fit"
        />
        <div className="container w-full mx-auto flex flex-col justify-center items-start flex-col-reverse sm:flex-row sm:gap-x-52 sm:items-end">
          <div className="md:w-[60%]  text-white relative  z-10 text-center lg:text-left overflow-hidden">
            <motion.div
              initial={{ x: -150 }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 60 }}
              className=""
            >
              <div className="pt-[50px]">
                <h1 className="font-medium text-transparent min-w-[360px] text-[32px] text-left  sm:text-[62px] font-primary bg-clip-text bg-gradient-to-r from-white via-[#70F] to-white sm:max-w-[12rem] mx-auto lg:mx-0">
                  Start Your Adventure in Cryptocraft
                </h1>
              </div>
            </motion.div>

            <div className=" flex flex-col gap-y-4 mt-14 sm:mt-20 pr-[20px]">
              <a
                href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <button className="w-full lg:w-[15rem] h-11 clipped2 bg-gradient-to-l from-white to-[#70F] relative group font-bold flex items-center justify-center scale-x-[-1]">
                  <div className="absolute bg-black w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>

                  <div className="absolute bg-gradient-to-l from-white to-[#70F]  w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300"></div>
                  <h1 className="font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black transition-colors ease-in-out duration-300">
                    Sign UP
                  </h1>
                </button>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-20 overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-bold flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full p-5 md:md:border-l-[0.5rem] border-[#70F] rounded-md">
                <h1 className="font-secondary font-bold text-prpl text-lg uppercase">Characters and Progression</h1>
                <ul>
                  <li>
                    <span className="text-[#7700FF]">• Player Avatar: </span> Customize your racing avatar to reflect
                    your achievements and personal style, with a variety of cosmetic options that set you apart on the
                    track.
                  </li>
                  <li>
                    <span className="text-[#7700FF]">• Racing Icons: </span>Compete against and learnfrom the legends of
                    the desert racing scene, each character offering uniquechallenges and contributing to your journey
                    to becoming a racing icon.
                  </li>
                </ul>
                <p className="mt-8 flex flex-col">
                  <span className="text-[#7700FF]">Level Design</span>
                  Explore a meticulously crafted open world, from bustling city streets toserene desert plains, each
                  area brimming with challenges and secrets waiting tobe discovered by the most daring racers.
                </p>
                <p className="mt-10 flex flex-col">
                  <span className="text-[#C0FF0E]">Technical Framework</span>
                  Built on Unreal Engine, "Sandstorm Racing" deliversbreathtaking visuals, realistic physics, and a
                  seamless open-world experience,enhanced by the integration of Ethereum blockchain for a unique Web3
                  twist.
                </p>
                <p className="mt-10 flex flex-col">
                  <span className="text-[#C0FF0E]">Art and Sound Design</span>
                  <ul>
                    <li>
                      •The game's art direction captures the stark beauty of the desert and the vibrant essence of
                      Middle Eastern car culture, creating a visually stunningbackdrop for high-speed racing and
                      exploration.
                    </li>
                    <li>
                      •The soundtrack of "Sandstorm Racers" features regional musicand dynamic compositions that adapt
                      to the racing action, complemented bymeticulously crafted sound effects that bring the roar of
                      engines and the howl of sandstorms to life.
                    </li>
                  </ul>
                </p>
                <p className="mt-10 flex flex-col">
                  <span className="text-[#C0FF0E]">Join The Race</span>
                  Are you ready to leave your mark on the sands and become a legend in theworld of "Sandstorm Racers"?
                  Customize your ride, master the drift,and explore the vast open world that awaits.
                </p>
                <p className="mt-10">Discover Sandstorm Racingand Start Your Adventure</p>
              </div>
            </div>

            <div className="w-full h-auto clipped2 bg-gry relative flex items-center justify-center scale-x-[-1] rounded-md">
              {/* <div className="scale-x-[-1] text-white w-full h-full p-5 pb-6 md:border-l-[0.5rem] border-[#0ED4FF] rounded-md">
                <div className="flex flex-col gap-y-6">
                  {data.map((items, i) => {
                    return (
                      <div key={i} className="font-primary">
                        <h2 className="font-primary font-medium text-lg w-fit mt-3 text-[#0ED4FF]">{items.title}</h2>
                        <ul className="mt-4 font-medium">
                          {items.value.map((items, i) => {
                            return (
                              <li className="flex items-start gap-x-2" key={i}>
                                {items}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SandContent;
