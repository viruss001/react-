import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Auth from './layout/Auth.jsx'
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx'
const router = createBrowserRouter([
  {
    path : '/',
    element :<Layout/>,
    children:[{
      path : '/',
      element :<Home/>,
    },
    {
      path : 'about',
      element :<About/>,
    }]
  },
  {
    path : '/auth',
    element :<Auth/>,
    children:[{
      path : 'signup',
      element :<Signup/>,
    },
    {
      path : 'login',
      element :<Login/>,
    }]
  }
])
      
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
