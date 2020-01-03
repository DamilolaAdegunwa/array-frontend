import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './component/home';
import PrivateRoute from './authentication/PrivateRoute';
import Dashboard from './component/dashboard';
import './App.css';
import {AuthContext} from './authentication/context' 
function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
  <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <Route exact path="/" component={Home}/>
      <PrivateRoute path="/dashboard" component={Dashboard}/> 
    </Router>
  </AuthContext.Provider>
  );
}
export default App;