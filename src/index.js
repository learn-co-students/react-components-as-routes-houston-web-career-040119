import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
const About = () => {
  return (<div>
    <h1>This is about component!</h1>
  </div>)
}
const login = () => {
  return (<div>
    <form>
      <div>
        <input type="text" name="username" placeholder="Username"/>
        <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password"
          placeholder="password"/>
          <label htmlFor="password">PAssword</label>
          </div>
          
            <input type="submit" value="Login"/>
           </form>
  </div>)
}

ReactDOM.render((
  <Router>
    <Route path="/" render={Home}/>
    <Route exact path="/login" render={Login}/>
    
    </Router>),
 
  document.getElementById('root')
);


