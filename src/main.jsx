import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from 'lucide-react'
import NamePage from './pages/NamePage.jsx'
import GoalPage from './pages/GoalPage.jsx'
import ActivityPage from './pages/ActivityPage.jsx'
import Thankspage from './pages/ThanksPage.jsx'
import InfoUserPage from './pages/InfoUserPage.jsx'
import Login from './components/Login.jsx'
import SignIn from './pages/SignInPage.jsx'
import MainPage from './pages/MainPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProfileBodyPage from './pages/ProfileBodyPage.jsx'


createRoot(document.getElementById('root')).render(


  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/name',
  //     element: <NamePage />
  //   },
  //   {
  //     path: '/goal',
  //     element: <GoalPage />
  //   },
  //   {
  //     path: '/goal',
  //     element: <ProfileBodyPage />
  //   },
  //   {
  //     path: '/activity',
  //     element: <ActivityPage />
  //   },
  //   {
  //     path: '/thanks',
  //     element: <Thankspage />
  //   },
  //   {
  //     path: '/infouser',
  //     element: <InfoUserPage />
  //   },
  //   {
  //     path: '/login',
  //     element: <Login />
  //   },
  //   {
  //     path: '/signin',
  //     element: <SignIn />
  //   },
  //   {
  //     path: '/main',
  //     element: <MainPage />
  //   },
  //   {
  //     path: '/profile',
  //     element: <ProfilePage />
  //   }
  // ])


  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
)
