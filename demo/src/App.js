import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar title='Logo' one='Home' two='About' three='Contact' four='More' />
      <Form heading='Enter text to analyze'/>
    </div>
  );
}

export default App;
