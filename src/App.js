import './App.css';
// import About from './components/About';
import Header from './components/Header';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.getElementById('toggle').style.backgroundColor = 'black';
    }else{
      setMode("light");
      document.getElementById('toggle').style.backgroundColor = 'white';
    }
  }
  return (
    <div id="toggle" className="wrapper h-screen">
       <Header mode={mode} toggleMode={toggleMode}/>
       <TextForm mode={mode}/>
       {/* <About/> */}
    </div>
  );
}

export default App;
