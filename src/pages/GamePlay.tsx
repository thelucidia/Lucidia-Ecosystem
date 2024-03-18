import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GameContent from '../components/GameContent';
import Worlds from '../views/Hero/Worlds';
import Join from '../views/GamePlay/Join';
import Benefits from '../views/GamePlay/Benefits';
import PartnersLower from '../views/Hero/PartnersLower';

const GamePlay = () => {
  return (
    <section className="w-full h-full overflow-hidden bg-bg">
      <Nav />
      <GameContent />
      <Worlds id={'gameplay'} />
      <Join />
      <Benefits />
      <PartnersLower />
      <Footer />
    </section>
  );
};
export default GamePlay;
