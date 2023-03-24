import React from 'react';
import './App.css';
import TopNav from './components/topnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import './static/style.css';
// import './static/style.scss';

library.add(faCoffee);

function App() {
 
  return (
    <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
    <div className="App">
    <TopNav />
    </div>
    </div>
  );
}

export default App;