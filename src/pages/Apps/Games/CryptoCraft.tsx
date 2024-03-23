import Creativity from '../../../views/Apps/Games/crypto/Creativity';
import CryptoBanner from '../../../views/Apps/Games/crypto/CryptoBanner';
import GameDescription from '../../../views/Apps/Games/crypto/GameDescription';
import MainContent from '../../../views/Apps/Games/crypto/MainContent';
import Overview from '../../../views/Apps/Games/crypto/Overview';
import Featured from '../../../views/Apps/Games/Featured';

const CryptoCraft: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <CryptoBanner />
      <GameDescription id={3} />
      <Featured />
      <Creativity />
      <Overview />
      <MainContent />
      {/* <OtherGames id={1} /> */}
    </section>
  );
};
export default CryptoCraft;
