import { api } from "./api.js";

const getExercise = async () => {
    try {
      const response = await api.get('/exercises');
      return response.data
    } catch (error) {
      console.log("Error get exercise", error);
    }
  }

export const apiFunctions = {
    getExercise
}