import React from 'react';
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
import Curse from './pages/Games/Curse';
import DesertWarrior from './pages/Games/DesertWarrior';
import Game from './pages/Apps/Games/Game';
import CryptoCraft from './pages/Apps/Games/CryptoCraft';
import Desertwarrior from './pages/Apps/Games/Desertwarrior';
import SandStorm from './pages/Apps/Games/SandStorm';

const App: React.FC = () => {
  return (
    <section className="w-full h-full overflow-hidden bg-bg">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apps/game" element={<Game />} />
        <Route path="/apps/cryptocraft" element={<CryptoCraft />} />
        <Route path="/apps/desertwarrior" element={<Desertwarrior />} />
        <Route path="/apps/sandstorm" element={<SandStorm />} />

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
