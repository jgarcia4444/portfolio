import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects}/>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
