import Featured from '../../../views/Apps/Games/Featured';
import SandBanner from '../../../views/Apps/Games/SandStorm/SandBanner';
import SandContent from '../../../views/Apps/Games/SandStorm/SandContent';
import SandDescription from '../../../views/Apps/Games/SandStorm/SandDescription';
import SandView from '../../../views/Apps/Games/SandStorm/SandView';
import Ultimate from '../../../views/Apps/Games/SandStorm/Ultimate';
import PartnersLower from '../../../views/Hero/PartnersLower';

const SandStorm: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <SandBanner />
      <SandDescription id={3} />
      <Featured />
      <Ultimate />
      <SandView />
      <SandContent />
      {/* <OtherGames id={1} /> */}
      <PartnersLower />
    </section>
  );
};
export default SandStorm;
