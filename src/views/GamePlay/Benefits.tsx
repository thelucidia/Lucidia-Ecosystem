import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import React from 'react';

const Benefits: React.FC = () => {
  const data = [
    {
      desc: 'Wider Audience Reach: Highlight how joining Lucidia provides games with instant exposure to over <span classname="text-[#0ED4FF]">30,000</span> users, addressing the challenge of attracting players that many Web3 games face.',
    },
    {
      desc: 'Enhanced Player Experience: Explain how the unified login and cross-platfom compatibility enhance the user experience, making it easier for players to explore and engage with multiple games within the <span classname="text-[#0ED4FF]">Lucidia</span> ecosystem.',
    },
    {
      desc: 'Community Engagement: Emphasize the active and growing community within Lucidia, providing developers with a <span classname="text-[#0ED4FF]">direct line to feedback</span>, support, and engagement from a dedicated user base.',
    },
    {
      desc: "Innovative Features: Detail additional benefits such as access to <span classname='text-[#0ED4FF]'>Lucidia's NFT</span> Integration Toolkit, marketplaces, and community-driven platforms, which can enrich games with new monetization strategies and engagement mechanisms.",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto w-full h-full relative mt-[200px]">
      <div className="w-full mx-auto flex justify-center lg:flex-row flex-col sm:items-center items-start">
        <motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className=""
        >
          {' '}
          <div className="w-[40%]">
            <h1 className="max-w-[380px] min-w-[320px] flex items-center font-primary leading-[58px] w-auto text-[32px] 2xl:text-[62px] 2xl:leading-[3.5rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#A5FF16] via-[#0ED4FF] to-white">
              Benefits for game developers
            </h1>
          </div>
        </motion.div>
        <div className="sm:w-[58.9%] flex flex-col gap-y-5 md:py-16 sm:py-7 py-5 lg:block hidden">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className=""
          >
            {' '}
            <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md py-14 pl-7 pr-8 flex flex-col gap-y-10">
                {data.map((item, i) => {
                  return (
                    <p key={`desc-${i}`} className="text-[20px] font-primary leading-[20px] tracking-[1px]">
                      {parse(item.desc)}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="sm:w-[58.9%] flex flex-col gap-y-5 md:py-16 sm:py-7 py-5 lg:hidden md:block">
          <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
            <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md py-14 pl-7 pr-8 flex flex-col gap-y-10">
              {data.map((item, i) => {
                return (
                  <div key={`item-${i}`}>
                    <p key={`desc-${i}`} className="text-[20px] font-primary leading-[20px] tracking-[1px]">
                      {parse(item.desc)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
