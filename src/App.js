import React from 'react';
import './App.css';
import TopNav from './components/topnav';
import Home from './pages/home';
import Education from './pages/education';
import Experience from './pages/experience';
import Portfolio from './pages/porfolio';
import Detail from './components/duty';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import './static/style.css';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


library.add(faCoffee);

function App() {
  return (
    <Router basename='/'>
    <div className="App">
    <TopNav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/education' component={Education} />
      <Route exact path='/experience' component={Experience} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route path="/detail/:name" component={Detail}></Route>
    </Switch>
    </div>

    </Router>
  );
}

export default App;