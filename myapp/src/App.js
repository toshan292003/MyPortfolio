import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Pages/navbar';
import Home from './Pages/home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/experience' element={<Experience/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
