{
  /* IMPORTS LIBRARY */
}

import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

{
  /* IMPORTS CSS */
}

import App from "./App.jsx";
import "./index.css";

{
  /* IMPORTS PAGES */
}

import NamePage from "./pages/NamePage.jsx";
import GoalPage from "./pages/GoalPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";
import Thankspage from "./pages/ThanksPage.jsx";
import InfoUserPage from "./pages/InfoUserPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProfileBodyPage from "./pages/ProfileBodyPage.jsx";
import ExerciseProvider from "./contexts/ExerciseContext.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import CreateExercise from "./pages/CreateExercisePage.jsx";
import Timer from "./pages/TimerPage.jsx";
import BasalPage from "./pages/BasalPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NameProvider from "./contexts/NameContexts.jsx";
import ProfileBodyProvider from "./contexts/ProfileBodyContexts.jsx";
import ProfileProvider from "./contexts/ProfileContexts.jsx";


// Criando contexto para compartilhar nome do usuário
const UserContext = createContext();

const clientId ="274780333869-3upraqeb95j68muct6t8t5nma280jqv2.apps.googleusercontent.com";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/nome", element: <NamePage /> },
  { path: "/metas", element: <GoalPage /> },
  { path: "/perfilusuario", element: <ProfileBodyPage /> },
  { path: "/atividade", element: <ActivityPage /> },
  { path: "/agradecimento", element: <Thankspage /> },
  { path: "/infos", element: <InfoUserPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/principal", element: <MainPage /> },
  { path: "/perfil", element: <ProfilePage /> },
  { path: "/criarexercicio", element: <CreateExercise /> },
  { path: "/tempodepausa", element: <Timer /> },
  { path: "/tmb", element: <BasalPage /> },
  { path: "/sobre", element: <AboutUs /> },
]);

createRoot(document.getElementById("root")).render(

  <ProfileProvider>
    <ProfileBodyProvider> 
      <NameProvider>
        <ExerciseProvider>
          <GoogleOAuthProvider clientId={clientId}>
            <StrictMode>
              <RouterProvider router={router} />
            </StrictMode>
          </GoogleOAuthProvider>
        </ExerciseProvider>
      </NameProvider>
    </ProfileBodyProvider>
  </ProfileProvider>

);
