import { createBrowserRouter,  } from "react-router";
import './App.css';
import { Toaster, toast } from 'sonner'
import Hero from "./components/Hero";
import LandingPage from "./components/landingpage";
import { Verification } from "./components/auth1/verification";
import { Login } from "./components/auth1/login";


export const router = createBrowserRouter([
  {
    path:'/',
    element: <LandingPage />
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
