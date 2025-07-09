import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import CountDownTimer from './Components/CountDownTimer';

// Ensure that './Components/Button.js' and './Components/Calculator.js' exist and export their components as default
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Calculator />
        <Calculator />
        <CountDownTimer />
      </header>
    </div>
  );
}
export default App;
