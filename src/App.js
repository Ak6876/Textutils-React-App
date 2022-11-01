import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import React from "react";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#230028'
      showalert("Dark Mode Has Been Enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode Has Been Enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About Textutils" home="Home" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-4">
        <Textform Heading="Enter The Text To Analyze Below" mode={mode} showalert={showalert} />
          {/* <Routes>
            <Route  exact path="/about" element={<About mode={mode} />}>
            </Route>
            </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;