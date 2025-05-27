
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  

  const activeLinkStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '5px',
    textDecoration: 'none',
    color: 'green',
    
    borderRadius: '5px',
  };

  const defaultLinkStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '5px',
    textDecoration: 'none',
    color: 'black',
    backgroundColor: 'transparent',
    borderRadius: '5px',
  };
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
setAlert({
  message:message,
  type:type
})
setTimeout(() => {
      setAlert(null);
  },1500);
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const colorToggle =(cls)=>{
    removeBodyClasses();
document.body.classList.add('bg-'+cls)
    console.log(cls);
  }
  
  const toggleMode = ()=>{
    removeBodyClasses();
    //document.body.className = '';
    //document.body.classList.add('bg-'+cls)
    
    //console.log(cls);
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = "#202c52";
      showAlert("Dark mode has been activated","success");
      document.title = 'TextUtils - Dark Mode'
      setInterval(()=>{
        document.title = 'TextUtils is in amazing mode'
      },1000);
      setInterval(()=>{
        document.title = 'Install TextUtils '
      },1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated","success");
      document.title = 'TextUtils - Light Mode'
      
    }
  }
  const activeLink = {
  display: 'block',
  margin: '10px 0',
  padding: '5px',
  textDecoration: 'none',
  color: 'white',
  backgroundColor: '#007bff',
  borderRadius: '5px',
};

  
  return (
    <>
    <Router>
  <Navbar title= "TextUtils" aboutText="About Text"  mode = {mode} toggleMode = {toggleMode} colorToggle= {colorToggle} activeLinkStyle={activeLinkStyle} defaultLinkStyle={defaultLinkStyle} /> 
  <Alert alert = {alert}/>
 <div className="container my3" >
  
  <Routes>
  <Route exact path="/about" element={<About mode = {mode}/>} />
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
</Routes>  
 </div>
 </Router>
</>

  );
}export default App;
