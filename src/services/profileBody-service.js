import { api } from "./api"

const updateProfileBody = async (data, id) => {
    try {
        const heightInMeters = data.height / 100;
        const imc = (data.weight / (heightInMeters * heightInMeters)).toFixed(2);

        let weightStatus = "";
        let obesityLevel = "";
        
        if (imc < 18.5) {
          weightStatus = 'UNDERWEIGHT';
          obesityLevel = 'NORMAL';
        } else if (imc < 24.9) {
          weightStatus = 'NORMAL_WEIGHT';
          obesityLevel = 'NORMAL';
        } else if (imc < 29.9) {
          weightStatus = 'OVERWEIGHT';
          obesityLevel = 'GRADE_1';
        } else if (imc < 34.9) {
          weightStatus = 'OBESITY';
          obesityLevel = 'GRADE_2';
        } else {
          weightStatus = 'SEVERE_OBESITY';
          obesityLevel = 'GRADE_3';
        }

        const response = await api.put(`/body/${id}`, {
          weight: parseInt(data.weight),
          height: parseInt(data.height),
          goalWeight: parseInt(data.goalWeight),
          imc: parseFloat(imc),
          weightStatus,
          obesityLevel,
        });
           
        return response;

    } catch (error) {
        console.log("Error update body");
        throw(error)
    }
}

export const apiProfileBody = {
    updateProfileBody
}