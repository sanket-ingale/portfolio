import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Work from './components/containers/Work';
import About from './components/containers/About';

export default function App() {

  const [angle, setAngle] = useState(0);

  window.onscroll = () => setAngle(prevState => window.scrollY / 10);

  return (
    <div className="app">
      <img 
        id='hex'
        src={require('./images/hexagon.png')} 
        alt='hex'
        style={{
          transform: `rotate(-${angle}deg)`
        }}
      />
      <Header/>
        <Routes>
          <Route path='/' element={<Work/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}
