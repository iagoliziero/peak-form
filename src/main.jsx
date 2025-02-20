import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NamePage from './pages/NamePage.jsx'
import GoalPage from './pages/GoalPage.jsx'
import ActivityPage from './pages/ActivityPage.jsx'
import Thankspage from './pages/ThanksPage.jsx'
import InfoUserPage from './pages/InfoUserPage.jsx'
import Login from './components/Login.jsx'
import MainPage from './pages/MainPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProfileBodyPage from './pages/ProfileBodyPage.jsx'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ExerciseProvider from "./contexts/ExerciseContext.jsx";
import SignInPage from './pages/SignInPage.jsx'
import CreateExercise from './pages/CreateExercisePage.jsx'
import Timer from './pages/TimerPage.jsx'
import BasalPage from './pages/BasalPage.jsx'
import AboutUs from './pages/AbotUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/nome',
    element: <NamePage />
  },
  {
    path: '/metas',
    element: <GoalPage />
  },
  {
    path: '/perfilusuario',
    element: <ProfileBodyPage />
  },
  {
    path: '/atividade',
    element: <ActivityPage />
  },
  {
    path: '/agradecimento',
    element: <Thankspage />
  },
  {
    path: '/infos',
    element: <InfoUserPage />
  },
  {
    path: '/login',
    element: <App />
  },
  {
    path: '/signin',
    element: <SignInPage />
  },
  {
    path: '/principal',
    element: <MainPage />
  },
  {
    path: '/perfil',
    element: <ProfilePage />
  },
  {
    path: '/criarexercicio',
    element: <CreateExercise />
  },
  {
    path: '/tempodepausa',
    element: <Timer />
  },
  {
    path: '/tmb',
    element: <BasalPage />
  },
  {
    path: '/sobre',
    element: <AboutUs />
  },
])

createRoot(document.getElementById('root')).render(
  <ExerciseProvider>
  <StrictMode>
     <RouterProvider router={router} /> 
  </StrictMode>
  </ExerciseProvider>,
)
