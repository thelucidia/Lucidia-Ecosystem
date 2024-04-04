import React from 'react';
import Landing from './pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import Careers from './pages/Careers';
import OurProducts from './pages/OurProducts';
import GamePlay from './pages/GamePlay';
import RoadMap from './pages/RoadMap';
import Cryptocraft from './pages/Games/Cryptocraft';
import Sandstorm from './pages/Games/Sandstorm';
import Curse from './pages/Games/Curse';
import DesertWarrior from './pages/Games/DesertWarrior';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Game from './pages/Apps/Games/Game';
import CryptoCraft from './pages/Apps/Games/CryptoCraft';
import Desertwarrior from './pages/Apps/Games/Desertwarrior';
import CurseofThePharaoh from './pages/Apps/Games/CurseofThePharaoh';
import SandStorm from './pages/Apps/Games/SandStorm';
import Login from './pages/Apps/Login';
import SupportHub from './pages/Apps/SupportHub';
import DevTools from './pages/Apps/DevTools';
// import ComingSoon from './pages/Apps/ComingSoon';
import Dao from './pages/Apps/Dao';
import Marketplace from './pages/Apps/Marketplace';
import Tournaments from './pages/Apps/Tournaments';
import AppHome from './pages/Apps/Home';
import Signup from './pages/Apps/Signup';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="/game/cryptocraft" element={<CryptoCraft />} />
      <Route path="/game/sandstorm-racers" element={<SandStorm />} />
      <Route path="/game/curse-of-the-pharaoh" element={<CurseofThePharaoh />} />
      <Route path="/game/desert-warriors" element={<Desertwarrior />} />
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

      <Route path="game">
        <Route index element={<GamePlay />} />
        <Route path="/game/cryptocraft" element={<Cryptocraft />} />
        <Route path="/game/sandstorm-racers" element={<Sandstorm />} />
        <Route path="/game/curse-of-the-pharaoh" element={<Curse />} />
        <Route path="/game/desert-warriors" element={<DesertWarrior />} />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  // const { pathname } = useLocation();

  const [subdomain] = window.location.hostname.split('.');

  return (
    <section className="w-full h-full overflow-hidden bg-bg">
      <Nav />
      {subdomain === 'app' ? <AppRoutes /> : <BaseRoutes />}

      {/* <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/careers" element={<Careers />} /> */}

      {/* <Route path="/apps"> */}
      {/* <Route path="/apps/cryptocraft" element={<CryptoCraft />} />
        <Route path="/apps/desert" element={<Desertwarrior />} />
        <Route path="/apps/sandstorm" element={<SandStorm />} />
        <Route path="/apps/curse-of-the" element={<CurseofThePharaoh />} />
        <Route path="/apps/game" element={<Game />} />
        <Route path="/apps/login" element={<Login />} />
        <Route path="/apps/signup" element={<Signup />} />
        <Route path="/apps/support-hub" element={<SupportHub />} />
        <Route path="/apps/dev-tools" element={<DevTools />} />
        <Route path="/apps/dao" element={<Dao />} />
        <Route path="/apps/marketplace" element={<Marketplace />} />
        <Route path="/apps/tournaments" element={<Tournaments />} />
        <Route path="/apps" element={<AppHome />} /> */}

      {/* </Route> */}
      {subdomain !== 'app' && <Footer />}
    </section>
  );
};

export default App;
