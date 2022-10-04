import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './component/navbar/navbar.component';
import Buy from './pages/buy/buy.component';
import Rent from './pages/rent/rent.component';

function App() {
  return (
    <>
    
      <Navbar />

      <Routes>
      <Route path="/" element={<Rent />} />
      <Route path="/buy" element={<Buy />} />


      </Routes>

    </>
  );
}

export default App;