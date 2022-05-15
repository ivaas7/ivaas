import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>IVAAS:</code> Immigration Visa Assistance And Services.
        </p>
        <a
          className="App-link"
          href="https://ivaasoutsourcing.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ivaasoutsourcing.com
        </a>
      </header>
    </div>
  );
}

export default App;
