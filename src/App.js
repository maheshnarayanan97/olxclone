import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import Create from './Components/Create/Create';
import View from './Components/View/View';
import Post from './store/PostContext';
import Header from './Components/Header/Header';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })

  }, [])
  return (
    <div>
      <Post>

        <Router>

          <Route path="/" component={Home} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/create" component={Create} exact />
          <Route path="/viewpost" component={View} exact />

        </Router>
      </Post>

    </div>
  );
}

export default App;
