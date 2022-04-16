import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/issatree.png';
import './App.css';
import axios from 'axios'
import Login from './Components/Login/Login';
import AllTrees from './Components/AllTrees/AllTrees';
import LandingPage from './Components/WelcomeBanner/WelcomeBanner';
import MyTrees from './Components/MyTrees/MyTrees';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import Lost from './Components/Lost';
import {Switch, Route, Redirect} from "react-router-dom"

function App() {

  const [currentUserId, setCurrentUserId] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    getCurrentUser()
  }, [currentUserId])


  const registerUser = async (newUser) => {
    let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser);
    console.log(response.data)
  }
  const getCurrentUser = async () => {
    if(currentUserId !== ""){
    console.log(`current user id is: ${currentUserId}`)
    let response = await axios.get(`http://127.0.0.1:8000/api/auth/users/${currentUserId}/`, { headers:{Authorization: "Bearer " + localStorage.getItem('token')}})
    
    setCurrentUser(response.data)
    }
    else{
      setCurrentUser(null)
    }
  }

  const handleReset = (e) => {
    console.log("user logged out!");
    localStorage.removeItem('token');
    setCurrentUserId(null)
   // document.getElementById("registrationForm").reset();
}

  return (
    <div className="App">
      <NavBar />
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Switch>
        <Route path = "/" exact component={LandingPage}/>
        <Route path ='/mytrees' render={props => <MyTrees {...props} currentUser={currentUser}/>}/>
        <Route path ='/alltrees' component={AllTrees}></Route>
        <Route path ='/profile'render={props => <Profile {...props} currentUser={currentUser}/>}/>
        <Route path ='/login' render={props => <Login {...props} setCurrentUserId={setCurrentUserId}/>}/>
        <Route path='/register' render={props => <Register {...props} registerUser={registerUser}/>}/>
        <Route path='lost' component={Lost} />
        <Redirect to="./lost"/>
      </Switch>
        <button onClick={handleReset}>Log Out</button>
    </div>
  );
}

export default App;
