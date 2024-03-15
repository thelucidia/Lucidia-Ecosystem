import { BsLinkedin } from 'react-icons/bs';

const Hero = () => {
  const members = [
    {
      name: 'Adel Khatib',
      position: 'COO',
      link: 'https://www.linkedin.com/in/adel-khatib-b2b136180/',
      desc: [
        'Samsung Mena Partner (6 yrs)',
        'Electric fleet partner with Uber (2 yrs)',
        'Crypto/blockchain expert (10 yrs)',
        'Serial entrepreneur & gamer (15 yrs)',
      ],
    },
    {
      name: 'Feras Nimer',
      position: 'CFO',
      link: 'https://www.linkedin.com/in/feras-nimer-691a3258/',
      desc: [
        'Business transformation at EY (5 yrs)',
        'Project management (6 yrs)',
        'Crypto investor (4 yrs)',
        'Entrepreneur (5 yrs)',
      ],
    },
    {
      name: 'Ahmad Assaf',
      position: 'CTO',
      link: 'https://www.linkedin.com/in/ahmadassaf/',
      desc: [
        'AI & data expert (14 yrs)',
        'Crypto/tech enthusiast (5 yrs)',
        'Software engineer (18 yrs)',
        'Entrepreneur (10 yrs)',
      ],
    },
    {
      name: 'Al Rizqi',
      position: 'CMO',
      link: 'https://www.linkedin.com/in/al-rizqi/',
      desc: [
        'Marketing and Business Development: 5 Years',
        'Community Building: 3 Years',
        'Recruiter: 3 Years',
        'Teacher: 10+ Years',
      ],
    },
    {
      name: 'Oskar Krzak',
      position: 'CPO',
      link: 'https://www.linkedin.com/in/krzakoskar/',
      desc: [
        'Web3 Gaming Innovation (2+ years)',
        'Strategic Market Expansion (3+ years)',
        'Leadership in Operations (4+ years)',
        'Strategic Product Management (3+ years)',
      ],
    },
    {
      name: 'Jahongir Erkinov',
      position: 'Head of Game Dev',
      link: 'https://www.linkedin.com/in/jakhongirerkinov/',
      desc: ['Game Developer (7 years)', 'Lead Game Designer (3 years)'],
    },
    {
      name: 'Andrii Seliuk',
      position: 'Lead Web Developer',
      link: 'https://www.linkedin.com/in/andrii-seliuk-ab6213284/',
      desc: [
        'Game Developer (4 years)',
        'Flutter Engineer (1 year)',
        'Unreal Engine 5.3 Developer (2 years)',
        'Front-end Developer (4 years)',
        'Back-end Developer (4 years)',
      ],
    },
    {
      name: 'Malek Sharabi',
      position: 'Head of Developers',
      link: 'https://www.linkedin.com/in/malek-sharabi-016862118/',
      desc: [
        'Game Developer (6 years)',
        'Smart Contracts Developer (1 year)',
        'Front-end Developer (1 year)',
        'SEO Specialist (2 years)',
      ],
    },
    {
      name: 'Rula Madi',
      position: 'HEAD OF LEGAL',
      link: 'https://www.linkedin.com/in/rolamadi/',
      desc: ['Corporate & tech/IP law (20 yrs)', 'Senior management Adviser', 'Legal associations Member'],
    },
    {
      name: 'Aryan Ratu Langie',
      position: 'Community Manager',
      link: 'https://www.linkedin.com/in/aryanratulangie/',
      desc: [
        'Community Management (3 years)',
        'Client Relations (5 years)',
        'Teacher/Lecture (5 years)',
        'E-Sports Project Manager (10+ years)',
      ],
    },
    {
      name: 'El Ardyan',
      position: 'UI/UX Designer',
      link: 'https://www.linkedin.com/in/ell-ardyan-7a1b7a192',
      desc: ['UI/UX Designer (2 years)', 'Teacher (1+ years)'],
    },
    {
      name: 'Sania Aliya',
      position: 'UI/UX Designer',
      link: 'https://www.linkedin.com/in/chacaliyaa/',
      desc: ['Content Writer & Producer (2.5 years)', 'UI/UX Designer (2 years)'],
    },
    {
      name: 'Miroslav Pesic',
      position: 'Full Stack Developer',
      link: 'https://www.linkedin.com/in/miroslav-pesic-b255a92a9/',
      desc: ['Front-end Developer (5 years)', 'Back-end Developer (4 years)'],
    },
    {
      name: 'Ola Hladka',
      position: 'Graphic Designer',
      link: 'https://www.linkedin.com/in/ola-h-bb5a7b218?trk=contact-info',
      desc: ['Graphic Designer (3 years)', 'Web Designer (1 years)'],
    },
    {
      name: 'Evdokia Bobrova',
      position: 'Head of External Relations',
      link: 'https://www.linkedin.com/in/evdokia-bobrova/',
      desc: ['Sales & Marketing (5 years)', 'Client Advisory (3 years)'],
    },
    {
      name: 'Sara Gómez',
      position: 'Lead UI/UX Designer',
      link: 'https://www.linkedin.com/in/sara-g-44a723b6/',
      desc: [
        'UI/UX Designer (5 years)',
        'UX Research (3 years)',
        'Marketing and Design (2 years)',
        'Motion Graphics Designer (2 years)',
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg">
      <img src="/team/bg.webp" alt="Teambg" className="w-full h-screen object-cover absolute left-0 " />

      <div className="container w-full h-auto mx-auto relative z-10 font-primary md:mt-[12rem] mt-[6rem] flex items-center justify-center px-6">
        <img src="/token.webp" alt="token" className="absolute top-16 -right-6 z-10 w-28 md:hidden block rotate-90" />

        <img src="/team/left.webp" alt="Left" className="-mb-20 xl:block hidden" />
        <div className="flex flex-col sm:gap-y-6 md:items-center justify-center w-fit md:mx-auto flex-shrink-0">
          <h2 className="text-grn md:text-center text-lg font-medium uppercase text-left">lucidians</h2>
          <h1 className="2xl:text-[72px] text-[54px] font-semibold leading-[3.5rem]">MEET OUR CRYPT EXPERTS</h1>
          <p className="text-lg font-medium">
            At Lucidia we believe that the true, fully immersive metaverse is just around the corner.
          </p>
        </div>
        <img src="/team/right.webp" alt="Left" className="-mb-32 xl:block hidden" />
      </div>

      <img src="/hero/navline.webp" alt="NavLine" className="w-full relative z-10 mt-16 opacity-50 md:block hidden" />

      <div className="container w-full mx-auto h-auto relative z-10 flex flex-wrap gap-3 px-6 mt-24 items-center justify-center">
        <img src="/token.webp" alt="token" className="absolute -top-6 -right-4 z-10 w-16 md:hidden block" />

        {members.map((items, i) => {
          return (
            <div
              className="w-[19rem] h-[30.9rem] hover:from-prpl hover:via-prpl hover:to-prpl bg-gradient-to-b from-gry via-gry to-prpl clipped2 scale-x-[-1] relative"
              key={i}
            >
              <div className="w-[99.5%] bg-black h-[99.5%] absolute clipped2  m-auto top-0 bottom-0 left-0 right-0 shadow-teamShadow">
                <div className="w-full h-full scale-x-[-1] relative z-10">
                  <a href={items.link} target="_blank" rel="noreferrer noopener" className="">
                    <BsLinkedin className="top-5 left-5 absolute z-10 text-2xl text-prpl" />
                  </a>

                  <img
                    src={`/team/${i}.png`}
                    alt={items.name}
                    className="absolute w-full h-full top-0 left-0 object-cover"
                  />

                  <div className="w-full h-28 bg-[#4a069c] bottom-0 left-0 absolute blur-[4rem] z-0"></div>

                  <div className="absolute bottom-5 left-6 z-10">
                    <h1 className="font-primary text-[25px] font-semibold">{items.name}</h1>

                    <h2 className="font-secondary font-semibold mt-[5px] text-neon">{items.position}</h2>

                    <ul className="font-primary font-medium text-[15px] mt-5">
                      {items.desc.map((items, i) => {
                        return (
                          <li className="" key={i}>
                            {items}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-auto py-10 bg-grn mt-20 px-10">
        <h1 className="text-[54px] text-black text-center font-secondary font-bold leading-tight">
          Want to join our team?
        </h1>

        <a href="https://forms.gle/3zJDupBPggQSKA8L7" target="_blank" rel="noopener noreferrer" className="">
          <button className=" w-full md:w-[14.5rem] py-[0.7rem] clipped2 bg-black relative  font-bold flex items-center justify-center scale-x-[-1] mx-auto mt-3">
            <div className="absolute bg-grn w-[98.5%] h-[92%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>
            <h1 className="font-secondary relative z-10 text-black font-[700] text-[14px] scale-x-[-1]">
              APPLY NOW &gt;
            </h1>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
