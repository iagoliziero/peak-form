import { api } from "./api"

const updateProfileBody = async (data, id) => {
    try {
        const response = await api.put(`/body/${id}`, {
            weight: data.weight,
            height: data.height,
            goalWeight: data.goalWeight,
            imc: data.imc,
            weightStatus: data.weightStatus,
            obesityLevel: data.obesityLevel,
        })
        return response;
    } catch (error) {
        console.log("Error update body");
        throw(error)
    }
}

export const apiProfileBody = {
    updateProfileBody
}