import { useState } from 'react'
import NavBar from './NavBar'
import Body from "./Body"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import { Suspense, lazy } from 'react'
import Loading from './Loading/Loading'

function App() {

  const Login = lazy(()=>import('./Login'))

  return (
    <>
      <BrowserRouter basename="/">
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
