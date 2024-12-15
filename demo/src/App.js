import './App.css';
// import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar title='Logo' one='Home' two='Theme' three='Contact' four='More' />
      <Form heading='Enter text to analyze'/>
      {/* <About /> */}
    </div>
  );
}

export default App;
