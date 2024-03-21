import { motion } from 'framer-motion';

const Stats = () => {
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
    <div className="w-full h-auto bg-prpl py-14 mt-24 font-secondary">
      <div className="flex mx-auto w-fit sm:gap-x-24 flex-wrap justify-between sm:justify-center px-3 gap-y-10 md:text-left text-center">
        {stats.map((items, i) => {
          return (
            <motion.div
              key={i}
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="overflow-hidden"
            >
              <h1 className="text-5xl sm:text-[54px] font-bold text-center">{items.title}</h1>
              <p className="font-semibold uppercase sm:text-base text-sm">{items.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
