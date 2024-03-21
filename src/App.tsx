import Landing from './pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import Careers from './pages/Careers';
import OurProducts from './pages/OurProducts';
import GamePlay from './pages/GamePlay';
import RoadMap from './pages/RoadMap';
import Cryptocraft from './pages/Cryptocraft';
import Nav from './components/Nav';
import Footer from './components/Footer';

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
        <Route path="/gameplay" element={<GamePlay />} />
        <Route path="/cryptocraft" element={<Cryptocraft />} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
