import { api } from "./api.js";

const createExercise = async (data) => {
    try {
        const response = api.post('/exercises', {
          title: data.title,
          numberSeries: data.numberSeries,
          repetitions: data.repetitions,
          advancedTechnique: data.advancedTechnique,
          intensity: data.intensity,
          description: data.description
        })
        return response;
      } catch (error) {
        console.log('Error creating the exercise', error);
      }
}

const getExercise = async () => {
    try {
      const response = await api.get('/exercises');
      return response.data
    } catch (error) {
      console.log("Error get exercise", error);
    }
  }

  const updateExercise = async (data , id) => {
    try {
        const response = await api.put(`/exercises/${id}`, {
          title: data.title,
          numberSeries: data.numberSeries,
          repetitions: data.repetitions,
          advancedTechnique: data.advancedTechnique,
          intensity: data.intensity,
          description: data.description
        })
        return response;
      } catch (error) {
        console.log('Error update the exercise', error);
      }
}

  const deleteExercise = async (id) => {
    try {
      const response = await api.delete(`/exercises/${id}`);
      return response;
    } catch (error) {
      console.log("Error get exercise", error);
    }
  }


export const apiFunctions = {
    createExercise,
    getExercise,
    deleteExercise,
    updateExercise
}

