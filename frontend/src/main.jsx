import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './SignUp.jsx'
import LogIn from './LogIn.jsx'

const myRouters = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/signup',
    element: <SignUp/>
  },
  {
    path:'/login',
    element: <LogIn/>
  }
])


createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={myRouters} />
    
  
)
