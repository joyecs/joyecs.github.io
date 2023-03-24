import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Education from './pages/education';
import Experience from './pages/experience';
import Portfolio from './pages/porfolio';
import Detail from './components/duty';
import Blog from './pages/blog';
import ErrorElement from './components/error';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/:project_name",
    element: <Detail />,
  },
  {
    path: "/blog",
    element: <Blog />,
  }
]);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <HashRouter
      router={router}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
