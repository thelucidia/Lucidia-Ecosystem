import React from 'react';

const Token: React.FC = () => {
  const our_products = [
    {
      title: 'NFT MARKETPLACE',
      slug: 'play',
      desc: 'A cloud-based solution enabling game studios to seamlessly incorporate NFT marketplaces both within their games and on their websites.',
      img: 'play.svg',
    },
    {
      title: 'Login System',
      slug: 'nft',
      desc: 'An advanced login system that simplifies user access via social media credentials and automatically generates custodial wallets for users.',
      img: 'nft.svg',
    },
    {
      title: 'NFT Tool Kit',
      slug: 'web3',
      desc: 'A robust toolkit offering game developers the necessary tools to integrate, manage, and monetize NFTs within their games.',
      img: 'web3.svg',
    },
    {
      title: 'Digital Twin (1:1 in Web3)',
      slug: 'fit',
      desc: 'A framework enabling the creation of digital twins for real-world items or locations within games and virtual environments.',
      img: 'fit.svg',
    },
  ];

  return (
    <section className="container w-full h-full mx-auto text-white py-[70px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[45px]">
        {our_products.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-[10px] border-[2px] border-cyan max-w-[682px] max-h-[425px] relative bg-gradient-to-b from-black via-cyan/10 to-cyan/70"
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
    </section>
  );
};

export default Token;
