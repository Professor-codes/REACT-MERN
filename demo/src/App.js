import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar title='Logo' one='Home' two='Theme' three='Contact' four='More' />
      <Routes>
        <Route path="/" element={<Form heading='Enter text to analyze' />} />
        <Route path="/theme" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
