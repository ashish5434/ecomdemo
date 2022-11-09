import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Cartpage from './components/Pages/Cartpage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
      
    
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "cart",
    element: <Cartpage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} >
    <App />
    </RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
