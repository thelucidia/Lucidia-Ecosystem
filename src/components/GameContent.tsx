const GameContent = () => {
  return (
    <section className="w-full h-auto p-5 relative text-white flex md:items-center justify-center">
      <img
        src="/assets/images/games.jpg"
        alt="career-banner"
        className="w-full h-screen object-cover absolute top-0 left-0"
      />
      <div className="w-full sm:h-screen h-auto absolute top-0 left-0 bg-gradient-to-t from-black/20 to-[#0ED4FF4D]/30 z-10"></div>
      <div className="w-full sm:h-screen h-auto absolute top-0 left-0 bg-gradient-to-t from-black to-black/51% z-9 "></div>
      {/* <img src="/hero/herobg.webp" alt="Herobg" className="w-full h-full object-cover absolute top-0 left-0" /> */}
      <div className="max-w-[1400px] w-full  h-auto mx-auto relative z-10 flex mt-[7rem] md:mt-[10rem] flex flex-col relative gap-y-5 sm:pb-[200px] pb-0">
        <h1 className="max-w-[33rem] flex items-center font-primary leading-normal w-auto uppercase text-[62px] 2xl:text-[72px] 2xl:leading-[5.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A5FF16] via-[#0ED4FF] to-white">
          Curse of the pharAo`s
        </h1>
        <h4 className="flex items-center font-primary leading-normal w-auto uppercase text-[18px] font-semibold text-white">
          Featured Games
        </h4>
        <img src="/assets/images/gun.png" alt="gun" width={87} className="pb-20" />
        <a
          href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="w-full lg:w-[15rem] relative">
            <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
              see details
            </div>
            <img src="/assets/images/game_button.png" alt="LaunchApp" />
            {/* <div className="absolute bg-[#5e38b2] w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-bl"></div>
                <h1 className="font-secondary relative z-10 font-[700] text-[14px] scale-x-[-1] text-transparent group-hover:text-black bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#9586FF] to-[#0ED4FF]">
                  Launch App
                </h1> */}
          </div>
        </a>
        {/*
      <div className="w-full relative flex">
        <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:hidden block text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]">
          join us as lucidian
        </h1>
        <img
          src="/assets/images/careers/hero.png"
          alt="Hero"
          className="object-cover top-0 md:w-auto h-[30vh] sm:h-[35vh] -mt-4 md:h-[70vh] mx-auto "
        />
      </div> */}
      </div>
      <img src="/hero/navline.webp" alt="Navline" className="absolute z-11 left-0 bottom-5 w-full xl:block hidden" />
    </section>
    // <section>
    //   <div className="w-full h-auto mx-auto relative z-10 flex flex-col-reverse md:flex-row">
    //     <img src="/assets/images/games.jpg" alt="Teambg" className="w-full h-screen object-cover" />
    //     <div className="w-full flex flex-col gap-y-[10px] absolute md:top-[82px] md:left-[25px] sm:top-[82px] sm:left-[25px] lg:top-[195px] lg:left-[134px] ">
    //       <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[35rem] 2xl:leading-[5.5rem] font-semibold md:block text-transparent bg-clip-text bg-gradient-to-r from-[#A5FF16] via-[#0ED4FF] to-[#FFFFFF] uppercase">
    //         Curse of the pharAo`s
    //       </h1>
    //       <div className=" max-w-[37rem] font-primary font-medium md:flex md:text-base text-sm text-[#ffffff]">
    //         Featured Games
    //       </div>
    //       <div className="w-fit h-fit">
    //         <img src="/assets/images/gun.png" alt="gun" />
    //       </div>
    //       <a
    //         href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="mt-[]"
    //       >
    //         <div className="w-full lg:w-[15rem] relative lg:block hidden">
    //           <div className="py-[13px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9586FF] to-[#0ED4FF]">
    //             see details
    //           </div>
    //           <img src="/assets/images/launch_app.svg" alt="LaunchApp" />
    //           {/* <div className="absolute bg-[#5e38b2] w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2 group-hover:bg-bl"></div>
    //             <h1 className="font-secondary relative z-10 font-[700] text-[14px] scale-x-[-1] text-transparent group-hover:text-black bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#9586FF] to-[#0ED4FF]">
    //               Launch App
    //             </h1> */}
    //         </div>
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
};
export default GameContent;
