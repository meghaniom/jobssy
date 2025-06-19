import React from 'react'
import "./index.css";
import App from "./App.jsx";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AppcontextProvider } from "./context/Appcontext.jsx";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
console.log("Clerk Key:", PUBLISHABLE_KEY);


 ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' >


  <BrowserRouter>
    <AppcontextProvider>
      <App />
    </AppcontextProvider>
  </BrowserRouter> 
   </ClerkProvider>
)
