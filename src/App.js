import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [btntext, setBtnText] = useState('dark mode');
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      setBtnText('light mode');
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setBtnText('dark mode');
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext} />
        <div className="container my-3">
          {/* Show alerts */}
          {alert && <Alert msg={alert.msg} type={alert.type} />}

          <Routes>
            <Route path="/" element={<TextForm heading="Enter your text here" showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            {/* 404 Page */}
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
