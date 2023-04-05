
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Service from './Routes/Service';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/service" element = {<Service/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    
      

    
    </div>
  );
}

export default App;
