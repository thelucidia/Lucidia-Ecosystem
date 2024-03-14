const RoadCard = () => {
  const mapcard = [
    {
      year: '2024',
      road: 'Q1Q2',
      desc: [
        'Release Alpha Limited Access To Games',
        'Seed Round',
        'Launch Ecosystem App(Beta)',
        'Private Beta Testing of Games:Zombie outbreak, Cryptocraft, NFT Racing, Lucidia FPS',
        'Listing on CoinMarketCap and CoinGecko',
        'Preasafe Using IDO Platforms',
        'User Education Portal for Web3 Gaming',
      ],
    },
    {
      year: '2024',
      road: 'Q3Q4',
      desc: [
        'Next CEX Listing',
        'Conduct Burn Event',
        'Launch in mainnet for All Games produced by Lucidia',
        'Comprehensive NFT Integration Toolkit for Game Developers',
        'Development of NFT Smart Contract Creation with Templates',
        'Cross-Platform Compatibility with Unified Lucidia Login',
        'Develop and launch Community-Driven Funding Platform',
      ],
    },
    {
      year: '2025',
      road: 'Q1Q2',
      desc: [
        'Token TGE',
        'Implement Staking',
        'Mobile Closed Beta',
        'First CEX and DEX Listings',
        'First game with Blockchain integration on mainet',
        'Development of Marketplace for Middle-Eastern Developers and In-Game Assets and Code',
        "Launch Lucidia's In-Game Purchase System Token Integration",
        'Start development of Web3 Game Marketing Hub',
      ],
    },
    {
      year: '2025',
      road: 'Q3Q4',
      desc: [
        'Built-in Game Inventory Ststem for Seamless Game Integration',
        'Share DAO Tools for Enhanced User Participation in Game Decisions',
        'Lucidia Bug Bounty Reward System',
        'Tournament API with ELO and Bracket System and Smart Contract Automation',
        'Launch Cross-Game Asset Integration for an Interconnected Lucidia Gaming Universe',
        'Finalize and launch Web3 Game Marketing UbuFirst DAO voting for Lucidia Ecosystem',
      ],
    },
    {
      year: '2026',
      road: 'Q1Q2',
      desc: [
        'Scale and enhance existing platforms and services based on user feedback and market trends',
        'Review and strategize for next-phase developments',
        'LContinue community engagement and marketing efforts',
        'Explore new technologies and integrations for future growth',
      ],
    },
    {
      year: '2026',
      road: 'Q3Q4',
      desc: [
        'Game Incubator and Accelerator Program',
        'Marketplace for User Account Sharing - Scholarship Program',
        'Comprehensive Translation Product: English to Arabic Localization',
        'Expand Offline Events Organizer in the Middle East for Community Engagement',
        'Quarterly Top 10 Games Ranking for the Middle East Region',
      ],
    },
  ];
  return (
    <section>
      <div className="mt-[331px] flex items-center justify-end mr-[20px] md:justify-center mb-[287px] mr-[30px]">
        <h1 className="text-blue-400 font-semibold font-['Bai Jamjuree'] text-[45px] md:text-[72px] uppercase relative font-secondary">
          RoadMap
        </h1>
      </div>
      <div className="w-[90%] w-fit mx-auto flex flex-col relative pb-[151px]">
        <div className="grid gap-x-5 2 gap-y-8 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          {mapcard.map((items, i) => {
            return (
              <div
                key={`card-${i}`}
                className="max-w-[459px] rounded-[10px] border-[2px] border-[#401675] relative"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                }}
              >
                <div className="flex flex-row justify-between gap-[10px] pt-[63px] px-11">
                  <div className="text-white font-bold font-clash-grotesk text-[26px] uppercase font-primary">
                    {items.year}
                  </div>
                  <div className="text-white font-bold font-clash-grotesk text-[26px] uppercase font-primary">
                    {items.road}
                  </div>
                </div>
                <div className="text-white font-semibold font-clash-grotesk text-base leading-relaxed mb-[98px]">
                  <ul className="max-w-[399px] list-disc pt-[74px] mr-[60px] ml-[76px]">
                    {items.desc.map((items, i) => {
                      return (
                        <li className="font-primary" key={`item-${i}`}>
                          {items}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadCard;
