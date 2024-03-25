import CurseBanner from '../../../views/Apps/Games/Curse/CurseBanner';
import CurseContent from '../../../views/Apps/Games/Curse/CurseContent';
import CurseDescription from '../../../views/Apps/Games/Curse/CurseDescription';
import CurseView from '../../../views/Apps/Games/Curse/CurseView';
import Myths from '../../../views/Apps/Games/Curse/Myths';
import Featured from '../../../views/Apps/Games/Featured';

const CurseofThePharaoh: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <CurseBanner />
      <CurseDescription id={3} />
      <Featured />
      <Myths />
      <CurseView />
      <CurseContent />
      {/* <OtherGames id={1} /> */}
    </section>
  );
};
export default CurseofThePharaoh;
