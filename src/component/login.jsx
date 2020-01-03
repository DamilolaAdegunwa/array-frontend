import React from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import {useAuth} from '../authentication/context' 
const Login = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
  
    function postLogin() {
      axios.post("https://www.somePlace.com/auth/login", {
        userName,
        password
      }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
    }
  
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    //value={userName} onChange={e => { setUserName(e.target.value); }}
    //value={password} onChange={e => { setPassword(e.target.value); }}
    return (
        <h1>login page</h1>
    );
}
export default Login;