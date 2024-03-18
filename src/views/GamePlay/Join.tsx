const Join = () => {
  // const partners = ['esports', 'play', 'goshen', 'unreal', 'sdcons', 'seman', 'rzm', 'sphereone', 'epic', 'arc'];

  return (
    <section className="max-w-[1400px] mx-auto bg-bg-w-full h-auto py-10 sm:px-5 relative">
      <div className="w-full h-auto mx-auto">
        <img src="/assets/images/racer.png" className="absolute z-10 top-[100px] sm:left-5 -left-[200px]" width={721} />
        <div className="py-[20px] w-[17rem] h-auto clipped3 bg-[#B0EB10] z-10 items-center justify-center scale-x-[-1] text-white mt-2 sm:flex hidden"></div>

        <div className="h-[300px] w-full h-auto sm:clipped2 bg-[#B0EB10] flex items-center justify-center scale-x-[-1]">
          <div className="w-full h-full scale-x-[-1]">
            <div className="flex flex-wrap sm:gap-x-[8rem] gap-x-16 gap-y-[2.5rem] items-center justify-end px-5 py-9">
              <h2 className="relative text-primary sm:max-w-[430px] sm:text-[46px] text-[26px] sm:text-left max-w-[260px] font-[700] text-[#000000] ">
                Join community of <span className="text-[#fff]">100k+</span> Lucidians
                <img
                  src="/assets/images/join_icon.png"
                  className="absolute sm:bottom-[15px] sm:right-[30px] bottom-[]  sm:w-[36px] sm:y-[47px] w-[20px] y-[27px]"
                />
              </h2>

              {/* {partners.map((items, i) => {
                return (
                  // <img src={`/partners/${items}.webp`} alt="Partners" className={`sm:w-auto w-20 ${items === 'epic' ? 'scale-[0.7] sm:scale-[1]' : toScale.includes(items) ? 'scale-[1.5] sm:scale-[1]' : ''}`} key={i} />
                  
                  <img src={`/partners/${items}.webp`} alt="Partners" className={`sm:w-[10rem] w-32`} key={i} />
                  );
                })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;