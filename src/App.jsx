import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/userContexts.jsx";

import MainPage from "./pages/MainPage.jsx";

function App() {
  const [user, setUser] = useState("");

  const [exercise, setExercise] = useState([
    {
      id: 1,
      title: "Supino Reto",
      qtdSeries: "4 séries",
      reps: "10-10 Reps",
      tecAvan: "Drop-set",
      intensidade: "pesado",
    },
    {
      id: 2,
      title: "Agachamento",
      qtdSeries: "4 séries",
      reps: "12-12 Reps",
      tecAvan: "Pausa Isométrica",
      intensidade: "pesado",
    },
    {
      id: 3,
      title: "Puxada",
      qtdSeries: "4 séries",
      reps: "10-10 Reps",
      tecAvan: "Superset",
      intensidade: "moderado",
    },
    {
      id: 4,
      title: "Leg Press",
      qtdSeries: "4 séries",
      reps: "12-12 Reps",
      tecAvan: "Pausa Descanso",
      intensidade: "pesado",
    },
    {
      id: 5,
      title: "Abdutora",
      qtdSeries: "4 séries",
      reps: "15-15 Reps",
      tecAvan: "Drop-set",
      intensidade: "leve",
    },
    {
      id: 6,
      title: "Remada Curvada",
      qtdSeries: "4 séries",
      reps: "10-10 Reps",
      tecAvan: "Superset",
      intensidade: "pesado",
    },
    {
      id: 7,
      title: "Rosca Direta",
      qtdSeries: "4 séries",
      reps: "12-12 Reps",
      tecAvan: "Pausa Isométrica",
      intensidade: "moderado",
    },
    {
      id: 8,
      title: "Desenvolvimento",
      qtdSeries: "4 séries",
      reps: "10-10 Reps",
      tecAvan: "Drop-set",
      intensidade: "pesado",
    },
    {
      id: 9,
      title: "Stiff",
      qtdSeries: "4 séries",
      reps: "12-12 Reps",
      tecAvan: "Pausa Descanso",
      intensidade: "moderado",
    },
    {
      id: 10,
      title: "Abdominals",
      qtdSeries: "4 séries",
      reps: "20-20 Reps",
      tecAvan: "Repetições Forçadas",
      intensidade: "leve",
    }
  ]);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <MainPage exercise={exercise} />
      </UserContext.Provider>
    </>
  );
}

export default App;
