import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Pages/navbar';
import Home from './Pages/home';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import Web from './Pages/Web';
import Designing from './Pages/Designing';
import Cinematography from './Pages/Cinematography';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/experience' element={<Experience/>}></Route>
          <Route path='/portfolio/web' element={<Web/>}></Route>
          <Route path='/portfolio/designing' element={<Designing/>}></Route>
          <Route path='/portfolio/cinema' element={<Cinematography/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
