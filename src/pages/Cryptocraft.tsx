import PartnersLower from '../views/Hero/PartnersLower';
import Crypto from '../views/GamePlay/Crypto';
import Unleash from '../views/GamePlay/Unleash';
import GameOverview from '../views/GamePlay/GameOverview';
const Cryptocraft = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Crypto />
      <Unleash />
      <GameOverview />
      <GameOverview />
      <PartnersLower />
    </section>
  );
};
export default Cryptocraft;
