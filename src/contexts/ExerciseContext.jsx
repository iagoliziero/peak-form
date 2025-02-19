import { createContext, useState } from "react";
import exerciseData from "../data/exerciseData.js";


export const ExerciseContext = createContext(exerciseData)

function ExerciseProvider({children}) {
    const [exercise, setExercise] = useState(exerciseData)

    return (
        <ExerciseContext.Provider value={{exercise, setExercise}}>
            {children}
        </ExerciseContext.Provider>
    )

}

export default ExerciseProvider;