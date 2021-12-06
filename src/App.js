import react, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import TreeDisplay from './Components/TreeDisplay/TreeDisplay';

function App() {

  const [currentUserId, setCurrentUserId] = useState("")
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    getCurrentUser()
  }, [currentUserId])

  const getCurrentUser = async () => {
    console.log(`current user id is: ${currentUserId}`)
    //Ping DB to get specific user by currentUserId
    //Hook this into currentUserId changes
    //Set user object as const, can then access all properties as needed
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login setCurrentUserId={setCurrentUserId}/>
        <TreeDisplay />
      </header>
    </div>
  );
}

export default App;
