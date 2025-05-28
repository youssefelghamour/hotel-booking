import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reservation from './pages/Reservation/Reservation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reserve/:id" element={<Reservation />} />
    </Routes>
  );
};

export default App;