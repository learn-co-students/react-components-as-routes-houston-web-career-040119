import React from 'react';
import ReactDOM from 'react-dom';
//step 1.
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './Home.js'
import Login from './Login.js'
import About from './About.js'
// import NavBar from './NavBar.js'


// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'red',
// }


// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
// //step 3. Copy paste

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };
 
// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };



//step 2. 
ReactDOM.render((
  // <NavBar />
  <Router>
    <React.Fragment>
  <Route path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/login" component={Login} />
  </React.Fragment>
</Router>),
  document.getElementById('root')
);
