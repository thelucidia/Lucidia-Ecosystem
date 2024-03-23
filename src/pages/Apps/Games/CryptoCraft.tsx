import P2EGames from '../../../views/Apps/Games/P2EGames';
import PartnersLower from '../../../views/Hero/PartnersLower';
import Creativity from '../../../views/Apps/Games/crypto/Creativity';
import CryptoBanner from '../../../views/Apps/Games/crypto/CryptoBanner';
import GameDescription from '../../../views/Apps/Games/crypto/GameDescription';
import MainContent from '../../../views/Apps/Games/crypto/MainContent';
import Overview from '../../../views/Apps/Games/crypto/Overview';

const CryptoCraft: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <CryptoBanner />
      <GameDescription id={3} />
      <P2EGames />
      <Creativity />
      <Overview />
      <MainContent />
      {/* <OtherGames id={1} /> */}
      <PartnersLower />
    </section>
  );
};
export default CryptoCraft;
