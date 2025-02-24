import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/home';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import Web from './Pages/Web';
import Designing from './Pages/Designing';
import Visualizations from './Pages/Visualizations';
import GameOfLife from './games/gameoflife';
import PhoneGame from './games/PhoneGame/PhoneGame';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/experience' element={<Experience/>}></Route>
          <Route path='/portfolio/web' element={<Web/>}></Route>
          <Route path='/portfolio/designing' element={<Designing/>}></Route>
          <Route path='/portfolio/games' element={<Visualizations/>}></Route>
          <Route path='/games/gameoflife' element={<GameOfLife/>}></Route>
          <Route path='/games/phonegame' element={<PhoneGame/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
