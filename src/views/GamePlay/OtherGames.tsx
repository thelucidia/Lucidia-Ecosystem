const OtherGames = () => {
  return (
    <section>
      <div className="flex flex-col container w-full h-auto mx-auto">
        <h2 className="flex text-[#F0F0F0] justify-items-start font-primary text-[62px] font-[700] leading-1 mb-[65px]">
          Other Games
        </h2>
        <div className="px-5 grid mb-[135px] gap-y-[20px] gap-x-[65px] justify-items-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <img src="/assets/images/game_1.png" className="w-fit y-fit" />
            <span className="relative text-[#FFF] text-[26px] font-primary font-[700] bottom-20 uppercase left-5">
              Curse of the Pfarais
            </span>
          </div>
          <div>
            <img src="/assets/images/game_2.png" className="w-fit y-fit" />
            <span className="relative text-[#FFF] text-[26px] font-primary font-[700] bottom-20 uppercase left-5">
              Desert Warriors
            </span>
          </div>
          <div>
            <img src="/assets/images/game_3.png" className="w-fit y-fit" />
            <span className="relative text-[#FFF] text-[26px] font-primary font-[700] bottom-20 uppercase left-5">
              sandstorm Racers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherGames;
