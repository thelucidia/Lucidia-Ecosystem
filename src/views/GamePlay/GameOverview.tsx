const GameOverview = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5">
        <div className="max-w-[1400px] w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <div className="md:w-[60%]">
            <img src="assets/images/overview.png" className="" />
          </div>
          <div className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[134px] md:py-16 sm:py-7 py-5">
            <div className="w-full h-auto clipped2 bg-gry relative  font-[600] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-cyan rounded-md">
                <p className="py-16 pl-7 pr-1 text-[24px] font-primary leading-[36px] flex flex-col">
                  <span className="text-[24px] font-primary leading-[36px] uppercase text-[#70F]">Game Overview</span>
                  <span className="text-[24px] font-primary leading-[36px] text-[#C0FF0E] flex flex-row">Title:</span>
                  Cryptocraft
                  <span className="text-[24px] font-primary leading-[36px] text-[#C0FF0E]">Genre:</span>Sandbox,
                  Open-World, Survival
                  <span className="text-[24px] font-primary leading-[36px] text-[#C0FF0E]">Target Audience:</span>
                  Creative builders, explorers, Web3 enthusiasts, and community-driven players
                  <p className="text-[24px] font-primary leading-[36px]">
                    Embark on an adventure in ever-expanding worlds, craft your destiny, and become part of a vibrant
                    community where collaboration and creativity reign supreme.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameOverview;
