import Landing from './pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import { lazy } from 'react';
import Careers from './pages/Careers';
// import RoadMap from './pages/RoadMap';
const RoadMap = lazy(() => import('./pages/RoadMap'));

const App = () => {
  return (
    <section className="w-full h-auto bg-black relative">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </section>
  );
};

export default App;
