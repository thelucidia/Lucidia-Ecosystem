import TokenBox from '../../components/TokenBox';
import React from 'react';

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
      title: 'nft marketplace',
      slug: 'play',
      desc: 'A cloud-based solution enabling game studios to seamlessly incorporate NFT marketplaces both within their games and on their websites.',
      img: 'play.webp',
    },
    {
      title: 'login system',
      slug: 'compete',
      desc: 'An advanced login system that simplifies user access via social media credentials and automatically generates custodial wallets for users.',
      img: 'learn.webp',
    },
    {
      title: 'nft tool kit',
      slug: 'train',
      desc: 'A robust toolkit offering game developers the necessary tools to integrate, manage, and monetize NFTs within their games.',
      img: 'train.webp',
    },
    {
      title: 'digital twin(1:1 in web3)',
      slug: 'fit',
      desc: 'A framework enabling the creation of digital twins for real-world items or locations within games and virtual environments.',
      img: 'fit.webp',
    },
  ],
  'our-products': [
    {
      title: 'nft marketplace',
      slug: 'play',
      desc: 'A cloud-based solution enabling game studios to seamlessly incorporate NFT marketplaces both within their games and on their websites.',
      img: 'play.svg',
    },
    {
      title: 'login system',
      slug: 'nft',
      desc: 'An advanced login system that simplifies user access via social media credentials and automatically generates custodial wallets for users.',
      img: 'nft.svg',
    },
    {
      title: 'nft tool kit',
      slug: 'web3',
      desc: 'A robust toolkit offering game developers the necessary tools to integrate, manage, and monetize NFTs within their games.',
      img: 'web3.svg',
    },
    {
      title: 'digital twin(1:1 in web3)',
      slug: 'fit',
      desc: 'A framework enabling the creation of digital twins for real-world items or locations within games and virtual environments.',
      img: 'fit.svg',
    },
  ],
};

const Tokens: React.FC<IToken> = ({ id }: IToken) => {
  const item = data[id];
  return (
    <section className="w-full h-auto px-5 py-7 md:py-10 bg-bg relative pb-10 md:pb-28">
      <div className="container mx-auto w-full h-auto">
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
