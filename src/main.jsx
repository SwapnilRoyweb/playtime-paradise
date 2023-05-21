import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Addtoy from './components/AddToy/Addtoy.jsx';
import PrivateRoute from './Providers/PrivateRoute.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import SingleToy from './components/SingleToy/SingleToy.jsx';
import Mytoys from './components/MyToys/Mytoys.jsx';
import UpdateToy from './components/UpdateToy/UpdateToy.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'addToy',
        element: <PrivateRoute><Addtoy></Addtoy></PrivateRoute>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'myToys',
        element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>
      },
      {
        path: 'updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`http://localhost:3000/toys/${params.id}`)
      },
      {
        path: 'singleToy/:id',
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/toys/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
