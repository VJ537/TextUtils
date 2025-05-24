
import React, { useState } from 'react';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
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
  
  const toggleMode = ()=>{
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
  
  return (
    <>
    <Router>
  <Navbar title= "TextUtils" aboutText="About Text"  mode = {mode} toggleMode = {toggleMode} /> 
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
