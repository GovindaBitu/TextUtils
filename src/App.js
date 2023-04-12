import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar'
  import TextForm from './components/TextForm'
 import React, { useState } from 'react';
 import Alert from './components/Alert';
 import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 

function App() {
  const[mode,setMode]= useState('light'); //wheter dark mode is enable or not
  const[alert, setAlert]= useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
   const toggleMode = ()=> {
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','success');
      document.title = 'TextUtils-Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils-Mast Hai';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils-installed it';
      // }, 1500);
    }else{
      setMode( 'light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = 'TextUtils-Light Mode';
    }
   }
   
  return (
  <>
    {/* <Navbar title ={"TextUtils"} aboutText= "About TextUtils"/> */}
    {/* <Navbar/> */}
    <Router>
    {<Navbar title = 'TextUtils' mode={mode} toggleMode={toggleMode}/>}
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        {/* /users--> <Component-1
        /users/home-->--> Components-2 */}
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode ={mode}/>}>
            </Route>
      </Routes>
    </div>
    </Router>
  </>    
  );
}

export default App;
