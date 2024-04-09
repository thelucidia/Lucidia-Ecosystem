import React from 'react';
import { Route, Routes } from 'react-router-dom';
import lazyDelayedImport from './config/lazyDelayedImport';

const Nav = lazyDelayedImport(() => import('./components/Nav'));
const Footer = lazyDelayedImport(() => import('./components/Footer'));

const Landing = lazyDelayedImport(() => import('./pages/Landing'));
const Team = lazyDelayedImport(() => import('./pages/Team'));
const Careers = lazyDelayedImport(() => import('./pages/Careers'));
const OurProducts = lazyDelayedImport(() => import('./pages/OurProducts'));
const GamePlay = lazyDelayedImport(() => import('./pages/GamePlay'));
const RoadMap = lazyDelayedImport(() => import('./pages/RoadMap'));
const Cryptocraft = lazyDelayedImport(() => import('./pages/Games/Cryptocraft'));
const Sandstorm = lazyDelayedImport(() => import('./pages/Games/Sandstorm'));
const Curse = lazyDelayedImport(() => import('./pages/Games/Curse'));
const DesertWarrior = lazyDelayedImport(() => import('./pages/Games/DesertWarrior'));
const Game = lazyDelayedImport(() => import('./pages/Apps/Games/Game'));
const CryptoCraft = lazyDelayedImport(() => import('./pages/Apps/Games/CryptoCraft'));
const Desertwarrior = lazyDelayedImport(() => import('./pages/Apps/Games/Desertwarrior'));
const CurseofThePharaoh = lazyDelayedImport(() => import('./pages/Apps/Games/CurseofThePharaoh'));
const SandStorm = lazyDelayedImport(() => import('./pages/Apps/Games/SandStorm'));
const Login = lazyDelayedImport(() => import('./pages/Apps/Login'));
const SupportHub = lazyDelayedImport(() => import('./pages/Apps/SupportHub'));
const DevTools = lazyDelayedImport(() => import('./pages/Apps/DevTools'));
const Dao = lazyDelayedImport(() => import('./pages/Apps/Dao'));
const Marketplace = lazyDelayedImport(() => import('./pages/Apps/Marketplace'));
const Tournaments = lazyDelayedImport(() => import('./pages/Apps/Tournaments'));
const AppHome = lazyDelayedImport(() => import('./pages/Apps/Home'));
const Signup = lazyDelayedImport(() => import('./pages/Apps/Signup'));

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
