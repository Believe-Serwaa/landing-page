import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import ContactForm from './pages/ContactForm';
import ImpactPage from './pages/ImpactPage';
import Features from './pages/Features';

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
  },
  {
    path:"contact",
    element:<ContactForm/>,
  },
  {
    path:"impact",
    element:<ImpactPage/>,
  },
  {
    path:"features",
    element:<Features/>,
  },
]);

  return <RouterProvider router={router}/>
}

export default App;
