import React from 'react';
import { Route, Routes } from 'react-router-dom';
import lazyDelayedImport from './config/lazyDelayedImport';

const Nav = lazyDelayedImport(() => import('./components/Nav'));
const Footer = lazyDelayedImport(() => import('./components/Footer'));

import Landing from './pages/Landing';
import Team from './pages/Team';
import Careers from './pages/Careers';
import OurProducts from './pages/OurProducts';
import GamePlay from './pages/GamePlay';
import RoadMap from './pages/RoadMap';
import Cryptocraft from './pages/Games/Cryptocraft';
import Sandstorm from './pages/Games/Sandstorm';
import Curse from './pages/Games/Curse';
import DesertWarrior from './pages/Games/DesertWarrior';
import Game from './pages/Apps/Games/Game';
import CryptoCraft from './pages/Apps/Games/CryptoCraft';
import Desertwarrior from './pages/Apps/Games/Desertwarrior';
import CurseofThePharaoh from './pages/Apps/Games/CurseofThePharaoh';
import SandStorm from './pages/Apps/Games/SandStorm';
import Login from './pages/Apps/Login';
import SupportHub from './pages/Apps/SupportHub';
import DevTools from './pages/Apps/DevTools';
import Dao from './pages/Apps/Dao';
import Marketplace from './pages/Apps/Marketplace';
import Tournaments from './pages/Apps/Tournaments';
import AppHome from './pages/Apps/Home';
import Signup from './pages/Apps/Signup';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="/cryptocraft" element={<CryptoCraft />} />
      <Route path="/sandstorm" element={<SandStorm />} />
      <Route path="/curse-of-the-pharaoh" element={<CurseofThePharaoh />} />
      <Route path="/desert-warriors" element={<Desertwarrior />} />
      <Route path="/game" element={<Game />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support-hub" element={<SupportHub />} />
      <Route path="/dev-tools" element={<DevTools />} />
      <Route path="/dao" element={<Dao />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="" element={<AppHome />} />
    </Routes>
  );
};

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/team" element={<Team />} />
      <Route path="/our-products" element={<OurProducts />} />
      <Route path="/roadmap" element={<RoadMap />} />
      <Route path="/careers" element={<Careers />} />

      <Route path="games">
        <Route index element={<GamePlay />} />
        <Route path="/games/cryptocraft" element={<Cryptocraft />} />
        <Route path="/games/sandstorm-racers" element={<Sandstorm />} />
        <Route path="/games/curse-of-the-pharaoh" element={<Curse />} />
        <Route path="/games/desert-warriors" element={<DesertWarrior />} />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  // const { pathname } = useLocation();

  const [subdomain] = window.location.hostname.split('.');
  const isApp = subdomain === 'app';
  return (
    <section className="w-full h-full overflow-hidden bg-bg">
      <Nav />
      {isApp ? <AppRoutes /> : <BaseRoutes />}

      {!isApp && <Footer />}
    </section>
  );
};

export default App;
