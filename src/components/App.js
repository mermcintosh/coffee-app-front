import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
