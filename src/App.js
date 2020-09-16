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
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/projects/:id" component={Project}/>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects}/>
            <Route path="/" component={Home} />
            
          </Switch>
        </div>
        
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
