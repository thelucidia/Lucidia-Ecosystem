import TokenBox from '../../components/TokenBox';

interface IToken {
  id: string;
}

interface IData {
  landing: {
    title: string;
    slug: string;
    desc: string;
    img: string;
  }[];
  'our-products': {
    title: string;
    slug: string;
    desc: string;
    img: string;
  }[];
  [key: string]: {
    title: string;
    slug: string;
    desc: string;
    img: string;
  }[];
}

const data: IData = {
  landing: [
    {
      title: 'play2earn',
      slug: 'play',
      desc: 'Earn $LUCID by participating in Lucidia games and achieving high scores',
      img: 'play.webp',
    },
    {
      title: 'learn2earn',
      slug: 'learn',
      desc: 'Earn $LUCID by completing short courses offered by top universities and corporations in Lucidia',
      img: 'learn.webp',
    },
    {
      title: 'train2earn',
      slug: 'train',
      desc: 'Earn $LUCID by contributing to the development of AI within the Lucidia Metaverse',
      img: 'train.webp',
    },
    {
      title: 'fit2earn',
      slug: 'fit',
      desc: 'Earn $LUCID by tracking calories burned through workout and competing in the leaderboard',
      img: 'fit.webp',
    },
  ],
  'our-products': [
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
  ],
};

const Tokens = ({ id }: IToken) => {
  const item = data[id];
  return (
    <section className="w-full h-auto px-5 py-7 md:py-10 bg-bg relative pb-10 md:pb-28">
      <div className="max-w-[1400px] mx-auto w-full h-auto">
        {id === 'hero' && (
          <h1 className="font-medium md:text-center text-transparent text-[32px] sm:text-3xl md:text-4xl font-primary  ">
            <span className="bg-clip-text bg-gradient-to-r from-white via-[#cab8ff] to-white">Earn $LUCID?</span>
            <span className="bg-clip-text bg-gradient-to-r from-white to-lavender"> Tokens</span>
          </h1>
        )}

        <div className="md:mt-20 mt-5 flex flex-wrap items-center justify-center gap-5 overflow-hidden">
          {item.map((items, i) => {
            return <TokenBox key={i} title={items.title} slug={items.slug} desc={items.desc} img={items.img} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tokens;
