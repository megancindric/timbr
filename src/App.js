import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import TreeDisplay from './Components/TreeDisplay/TreeDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        <TreeDisplay />
      </header>
    </div>
  );
}

export default App;
