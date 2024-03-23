import P2EGames from '../../../views/Apps/Games/P2EGames';
import PartnersLower from '../../../views/Hero/PartnersLower';
import Creativity from '../crypto/Creativity';
import CryptoBanner from '../crypto/CryptoBanner';
import GameDescription from '../crypto/GameDescription';
import MainContent from '../crypto/MainContent';
import Overview from '../crypto/Overview';

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
