import { useState } from 'react'
import NavBar from './components/NavBar'
import Body from "./components/Body"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import { Suspense, lazy } from 'react'
import Loading from './Loading/Loading'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'
import Feed from './components/Feed'
import Connections from './components/Connections'
import Requests from './components/Requests'

function App() {

  const Login = lazy(()=>import('./components/Login'))

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<Body/>}>
                <Route path="/" element={<Feed/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/connections" element={<Connections/>}/>
                <Route path="/requests" element={<Requests/>}/>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
