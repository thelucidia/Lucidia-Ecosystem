import P2EGames from '../../../views/Apps/Games/P2EGames';
import GameOverview from '../../../views/Games/Cryptocraft/GameOverview';
import OtherGames from '../../../views/Games/OtherGames';
import PartnersLower from '../../../views/Hero/PartnersLower';
import Creativity from '../crypto/Creativity';
import CryptoBanner from '../crypto/CryptoBanner';
import GameDescription from '../crypto/GameDescription';
import MainContent from '../crypto/MainContent';

const CryptoCraft: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <CryptoBanner />
      <GameDescription id={3} />
      <P2EGames />
      <Creativity />
      <GameOverview />
      <MainContent />
      <OtherGames id={1} />
      <PartnersLower />
    </section>
  );
};
export default CryptoCraft;
