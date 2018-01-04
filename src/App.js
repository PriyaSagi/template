import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Top from './Top';
import Port from './Port';
import About from './About';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const Home=()=>{
  return (
      <div>
       <Header/>
       <Top/>
       <Port/>
       <About/>
       <Contact/>
        
      </div>
  )
};

const About1=()=>{
 return (
     <div>
     <Header/>
      <About/>
    
     </div>
 )
};
const Portfolio=()=>{
 return (
     <div>
      <Header/>
      <Port/>
     </div>
 )
};
const Contact1=()=>{
  return (
      <div>
       <Header/>
       <Contact/>
      </div>
  )
 };
class App extends Component {
 render() {
   return (
     <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About1}/>
          <Route exact path="/information" component={Portfolio}/>
          
        </div>
      </Router>
     
   );
 }
}


export default App;
