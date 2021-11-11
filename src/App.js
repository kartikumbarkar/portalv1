
import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SignupPage from './pages/Signup';
import Signin from './pages/Signin';
import Course from './pages/Course';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import React,{useState} from 'react'
import Board from '../src/Components/Board';
function App() {
  const [ user, setLoginUser] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () =>{
      setIsOpen(!isOpen);
    }
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
      <Switch>
        <Route path='/' component={Home} exact />
        {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Signin setLoginUser={setLoginUser}/>
        }
        <Route path='/Home' component={Board} exact />
        <Route path='/Signup' component={SignupPage} exact />
        <Route path='/Signin' component={Signin} exact />
        <Route path='/course' component={Course} exact />
        <Route path='/Dashboard' component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
