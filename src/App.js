// import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import About from './Components/About';
import Alert from './Components/Alert';

import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
 



let name = "Kunal";
function App() {
  const[ mode, setMode] = useState('light');
  const[ text, setText] = useState('dark'); 
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout (() =>{
        setAlert(null);
      },1500)
  }
  const toggleMode = () =>{
      if(mode === 'light'){
        document.body.style.backgroundColor = '#202020';
        setMode('dark');
        setText('light');
        showAlert("Dark mode has been enabled","success")
        
      }
        

      else {
        document.body.style.backgroundColor = 'white';
        setMode('light');
        setText('dark');
       
        showAlert("Light mode has been enabled","success")
      }
  }
  return (
   <>
   <BrowserRouter>
     <Navbar title = "Text Utils" mode={mode} text={text} toggleMode=
     {toggleMode} aboutText ="About"/>

<Alert alert={alert}/>

    <div className="container my-3" > 
    
    <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
         
          
          <Route exact path="/" element = {<Textform showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/> } >
          
          
          </Route>
        </Routes>
        </div>   
        </BrowserRouter>
        
   </>
  );
}

export default App;
 