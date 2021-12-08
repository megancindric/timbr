import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Login from './Components/Login/Login';
import AllTrees from './Components/AllTrees/AllTrees';
import LandingPage from './Components/WelcomeBanner/WelcomeBanner';
import MyTrees from './Components/MyTrees/MyTrees';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import {Switch, Route} from "react-router-dom"

function App() {

  const [currentUserId, setCurrentUserId] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    getCurrentUser()
  }, [currentUserId])

  const getCurrentUser = async () => {
    if(currentUserId !== ""){
    console.log(`current user id is: ${currentUserId}`)
    let response = await axios.get(`http://127.0.0.1:8000/api/auth/users/${currentUserId}/`, {headers:{Authorization: "Bearer " + localStorage.getItem('token')}})
    
    setCurrentUser(response.data)
    }
    else{
      setCurrentUser(null)
    }
  }

  const handleReset = (e) => {
    console.log("user logged out!");
    localStorage.setItem('token', null);
    setCurrentUserId(null)
   // document.getElementById("registrationForm").reset();
}

  return (
    <div className="App">
      <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
      <Switch>
        <Route path = "/" exact render={props => <LandingPage currentUser={currentUser}/>}></Route>
        <Route path ='/mytrees' render={props => <MyTrees currentUser={currentUser}/>}></Route>
        <Route path ='/alltrees' component={AllTrees}></Route>
        <Route path ='/profile'render={props => <Profile currentUser={currentUser}/>}></Route>
        <Route path ='/login' render={props => <Login setCurrentUserId={setCurrentUserId}/>}></Route>
      </Switch>
        <button onClick={handleReset}>Log Out</button>
    </div>
  );
}

export default App;
