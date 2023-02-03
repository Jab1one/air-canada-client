import './App.scss';
import CustomAeroplan from './pages/CustomAeroplan/customaeroplan';
import HomePage from './pages/HomePage/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Travel from './pages/Travel/Travel';
import Everyday from './pages/Everyday/Everyday';
import CustomizedHomePageAeroplan from './components/CustomizedHomePageAeroplan/CustomizedHomePageAeroplan';
import Aeroplanpop from './pages/Aeroplanpop/Aeroplanpop';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aeroplan" element={<Aeroplanpop/>}/>
          <Route path="/customize" element={<CustomAeroplan />}/>
          <Route path="/travel" element={<Travel />}/>
          <Route path="/everyday" element={<Everyday />}/>
          <Route path="/CustomizedHomePageAeroplan" element={<CustomizedHomePageAeroplan />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
