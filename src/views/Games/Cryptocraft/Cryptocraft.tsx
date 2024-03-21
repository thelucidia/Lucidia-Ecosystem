import PartnersLower from '../../Hero/PartnersLower';
import Crypto from './Crypto';
import Unleash from './Unleash';
import GameOverview from './GameOverview';
import OtherGames from '../OtherGames';
const Cryptocraft = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Crypto />
      <Unleash />
      <GameOverview />
      <OtherGames />
      <PartnersLower />
    </section>
  );
};
export default Cryptocraft;
