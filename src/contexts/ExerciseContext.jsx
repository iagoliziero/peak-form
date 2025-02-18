import { createContext, useState } from "react";
import exerciseData from "../data/exerciseData";

export const ExerciseContext = createContext()

function ExerciseProvider({children}) {
    const [exercise, setExercise] = useState(exerciseData)

    return (
        <ExerciseContext.Provider value={{exercise, setExercise}}>
            {children}
        </ExerciseContext.Provider>
    )

}

export default ExerciseProvider;