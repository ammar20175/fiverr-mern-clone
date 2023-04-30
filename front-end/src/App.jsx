import React, { Children } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Add from './pages/add/Add'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Orders from './pages/orders/Orders'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import MyGigs from './pages/myGigs/MyGigs'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import './App.scss'

import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'

import { useEffect } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from 'react-router-dom'


function App() {

  const queryClient = new QueryClient();

  const Layout = () => {

    return (
      <div>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/message/:id',
          element: <Message />
        },
        {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/orders',
          element: <Orders />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
