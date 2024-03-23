import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// import { Link } from 'react-router-dom';

const Featured: React.FC = ({ initialSlide }: { initialSlide?: number }) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(initialSlide ?? 1);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const worldList = [
    {
      title: 'curse of the pharaoh',
      desc: 'Pulse-pounding action, earn $LUCID Tokens, crush undead hordes, ultimate survival.',
      image: 'zombie',
      path: '/apps/curse-of-the',
    },
    {
      title: 'cryptocraft',
      desc: 'Shape limitless worlds, earn $LUCID Tokens, unleash creativity, adventure awaits!',
      image: 'minecraft',
      path: '/apps/cryptocraft',
    },
    {
      title: 'sandstorm racers',
      desc: 'Take a ride through the night skyline, race with your friends and attend virtual events',
      image: 'cyber',
      path: '/apps/sandstorm',
    },
    {
      title: 'desert warriors',
      desc: 'Engage in the battle and complete missions to earn $LUCID Tokens.',
      image: 'fps',
      path: '/apps/desert',
    },
  ];

  return (
<<<<<<< HEAD
    <section className="w-full h-auto min-h-screen sm:bg-bg bg-transparent relative top-[-100px]">
=======
    <section className="w-full h-auto sm:bg-bg bg-transparent relative">
>>>>>>> 3a66e4eb41a99a19d42f2f71d2ece6165e4e6a3e
      <div className="px-5 py-5">
        <div className="max-w-[1400px] w-full mx-auto h-auto sm:mt-11">
          <div className="w-fit max-w-[1400px] mx-auto">
            <h1 className="font-medium text-transparent text-2xl sm:text-3xl md:text-4xl font-primary bg-clip-text bg-gradient-to-r from-[#e4d3fe] via-white to-lavender w-fit 2xl:text-left text-center mx-0 sm:mx-auto 2xl:mx-0">
              Featured Game
            </h1>

            <Slider
              {...settings}
              initialSlide={initialSlide ?? 1}
              afterChange={setPage}
              className="m-full pt-20 overflow-hidden"
              ref={sliderRef}
            >
              {worldList.map((items, i) => (
                <div
                  // to={items.path}
                  className="relative group/main cursor-pointer "
                  style={{ width: 467 }}
                  key={i}
                  onClick={() => {
                    if (i > page) {
                      if (page === 0 && i === 3) {
                        sliderRef?.current?.slickPrev();
                      } else {
                        sliderRef?.current?.slickNext();
                      }
                    } else if (i < page) {
                      if (page === 3 && i === 0) {
                        sliderRef?.current?.slickNext();
                      } else {
                        sliderRef?.current?.slickPrev();
                      }
                    }
                  }}
                >
                  <div
                    style={windowWidth < 460 ? { width: windowWidth } : {}}
                    className="w-[450px] h-[560px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                  >
                    <div className="scale-x-[-1] relative w-full h-full group overflow-hidden ">
                      <img
                        src={`/worlds/${items.image}.webp`}
                        alt={items.title}
                        className="absolute top-0 left-0 w-full h-full object-cover object-left"
                      />

                      <div className=" shadow-world w-full h-full relative z-10"></div>

                      <div
                        className={`transition-shadow ease-in-out duration-500 group-hover:shadow-worldHover  w-full h-full top-0 left-0 absolute z-10`}
                      ></div>

                      <div className="absolute bottom-4 left-4 z-10 p-3 group-hover:text-black text-white ease-in-out duration-[0.1s]">
                        <h1 className="uppercase font-primary text-2xl tracking-wide group-hover:mb-2 transition-all">
                          {items.title}
                        </h1>
                        <div className="overflow-hidden max-h-0 group-hover:max-h-[3rem] transition-all">
                          <p className="font-medium font-primary">{items.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
