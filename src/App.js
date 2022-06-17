import './App.css';
// import About from './components/About';
import Header from './components/Header';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.getElementById('toggle').style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "Success");
    }else{
      setMode("light");
      document.getElementById('toggle').style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }
  return (
    <div id="toggle" className="wrapper h-screen">
       <Header mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert} mode={mode}/>
       <TextForm showAlert={showAlert} mode={mode}/>
       {/* <About/> */}
    </div>
  );
}

export default App;
