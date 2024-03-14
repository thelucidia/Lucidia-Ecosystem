import Nav from '../components/Nav';
import RoadCard from '../components/RoadCard';
import Footer from '../views/Hero/Footer';
import PartnersLower from '../views/Hero/PartnersLower';

const RoadMap = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <img src="/team/bg.png" alt="Teambg" className="w-full h-screen object-cover absolute left-0 " />
      <img src="/assets/images/man.png" alt="man" className="w-fit h-fit absolute mt-[188px]" />
      <img
        src="/assets/images/right_man.png"
        alt="right_man"
        className="w-fit h-fit absolute right-0 mt-[331px] mr-[39px]"
      />
      <Nav />
      <RoadCard />
      <PartnersLower />
      <Footer />
    </section>
  );
};
export default RoadMap;
