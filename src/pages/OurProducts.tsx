import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../views/Hero/Hero';
import PartnersLower from '../views/Hero/PartnersLower';
import PartnersUpper from '../views/Hero/PartnersUpper';
import Tokens from '../views/Hero/Tokens';

const Landing = () => {
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
    <section className="w-full h-auto bg-black relative">
      <Nav />
      <Hero id={'our-products'} />
      <PartnersUpper />
      <Tokens />
      <div className="w-full h-auto bg-prpl py-14 mt-24 font-secondary">
        <div className="flex mx-auto w-fit sm:gap-x-24 flex-wrap justify-between sm:justify-center px-3 gap-y-10 md:text-left text-center">
          {stats.map((items, i) => {
            return (
              <div className="" key={i}>
                <h1 className="text-5xl sm:text-[54px] font-bold text-center">{items.title}</h1>
                <p className="font-semibold uppercase sm:text-base text-sm">{items.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <section className="w-full h-full relative">
        <div className="w-full h-full overflow-hidden px-5">
          <div className="container w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
            <div className="md:w-[50%] lg:pt-[0px] md:pt-[20px] pt-[10px] ">
              <h2 className="font-medium text-right md:text-[62px] text-[32px] leading-normal font-primary text-transparent max-w-[430px] bg-clip-text bg-gradient-to-r from-[#EEE0FF] via-[#cab8ff]  to-[#FFF]">
                Join Licidia`s Ecosystem
              </h2>
              {/* <div className="w-full"> */}
              <button className="lg:ml-[65px] ml-[0px] w-full lg:w-[15rem] mt-[10px] h-11 clipped2 bg-gradient-to-l from-white to-[#0ED4FF] relative group font-bold scale-x-[-1] ">
                <div className="absolute bg-black w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>

                <div className="absolute bg-gradient-to-l from-white to-[#0ED4FF]  w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300"></div>
                <h4 className="uppercase font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black transition-colors ease-in-out duration-300">
                  get started
                </h4>
              </button>
              {/* </div> */}
            </div>
            <div className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[134px] md:py-16 sm:py-7 py-5">
              <div className="w-full h-auto clipped2 bg-gry relative  font-[600] flex items-center justify-center scale-x-[-1] rounded-md">
                <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-prpl rounded-md">
                  <p className="lg:py-[112px] md:py-[72px] py-[52px] lg:pl-[83px] md:pl-[40px] pl-[25px] pr-[13px] text-[24px] font-primary leading-[36px]">
                    Ready to transform your gaming experience? Connect, create, and Trade in the Middle East's premier
                    gaming ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnersLower />
      <Footer />
    </section>
  );
};

export default Landing;
