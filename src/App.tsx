import Landing from './pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import Careers from './pages/Careers';
import OurProducts from './pages/OurProducts';
import GamePlay from './pages/GamePlay';
import RoadMap from './pages/RoadMap';
import Cryptocraft from './pages/Games/Cryptocraft';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Sandstorm from './pages/Games/Sandstorm';
// import Desert from './pages/Games/Curse';
import Curse from './pages/Games/Curse';
import DesertWarrior from './pages/Games/DesertWarrior';

const App = () => {
  return (
    <section className="w-full h-full overflow-hidden bg-bg">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="gameplay">
          <Route index element={<GamePlay />} />
          <Route path="/gameplay/cryptocraft" element={<Cryptocraft />} />
          <Route path="/gameplay/sandstorm" element={<Sandstorm />} />
          <Route path="/gameplay/curse-of-the" element={<Curse />} />
          <Route path="/gameplay/desert" element={<DesertWarrior />} />
        </Route>
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
