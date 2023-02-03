import './App.scss';
import CustomAeroplan from './pages/CustomAeroplan/customaeroplan';
import HomePage from './pages/HomePage/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Travel from './pages/Travel/Travel';
import Everyday from './pages/Everyday/Everyday';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/customize" element={<CustomAeroplan />}/>
          <Route path="/travel" element={<Travel />}/>
          <Route path="/everyday" element={<Everyday />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
