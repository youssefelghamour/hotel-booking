import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reservation from './pages/Reservation/Reservation';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reserve/:id" element={<Reservation />} />
      <Route path="login" element={<Login />} /> 
    </Routes>
  );
};

export default App;