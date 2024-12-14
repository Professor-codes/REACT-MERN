import './App.css';

function App() {
  return (
    <div className='container'>
      <header className='header d-flex justify-content-between'>

        <h3>Logo</h3>

        <nav className=''>
          <ul className='d-flex list-unstyled justify-content-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>More</li>
          </ul>
        </nav>

        <div className='explore'>
          <button>Book a demo</button>
          <button>Sign in</button>
        </div>

      </header>
    </div>
  );
}

export default App;
