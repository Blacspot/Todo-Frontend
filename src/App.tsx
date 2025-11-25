import { createBrowserRouter,  } from "react-router";
import './App.css';
import { Toaster, toast } from 'sonner'

import { Verification } from "./components/auth1/verification";
import { Login } from "./components/auth1/login";
import Landingpage from "./components/Landingpage";


export const router = createBrowserRouter([
  {
    path:'/',
    element: <Landingpage/>
  },
  {
    path:'/events',
    element: <h1>Welcome to events</h1>
  },
  {
    path:'/verify',
    element: <Verification />
  },
  {
    path:'/login',
    element: <Login />
  },
]);



function App() {

  return (
    <>
     <Toaster position='top-right' toastOptions={{
      classNames: {
        error: 'bg-red-500 text-white',
        success: 'bg-green-500 text--white' 
      }
     }} />
      
      
    </>
  )
}

export default App
