import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './Pages/Home/HomeScreen'
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './Pages/Login/Login'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { isSubscribed, login, logout, selectUser } from './features/userSlice';
import Profile from './Pages/Profile/Profile';
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
     const unsub =  auth.onAuthStateChanged(userAuth =>{
        if(userAuth){
          //loged in
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email,
          }))

        } else {
          //logged out
          dispatch(logout())

        }
      })
      return unsub
  },[dispatch])

  return (
    <div className="app">
      {/* <HomeScreen />   */}
      <Router>
      {!user? ( 
        <Login />
      ) : ( 
        <Switch>
        <Route path="/profile">
          <Profile/>

        </Route>
          <Route path="/" exact>
            <HomeScreen/>
          </Route>
        </Switch>
      )}
        
      </Router>
    </div>
  );
}

export default App;
