import PartnersLower from '../../../views/Hero/PartnersLower';
import Description from '../../../views/Apps/Games/desert/Description';
import DesertBanner from '../../../views/Apps/Games/desert/DesertBanner';
import DesertContent from '../../../views/Apps/Games/desert/DesertContent';
import DesertView from '../../../views/Apps/Games/desert/DesertView';
import FPS from '../../../views/Apps/Games/desert/FPS';

const Desertwarrior: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <DesertBanner />
      <Description id={3} />
      <FPS />
      <DesertView />
      <DesertContent />
      {/* <OtherGames id={1} /> */}
      <PartnersLower />
    </section>
  );
};
export default Desertwarrior;
