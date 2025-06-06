import { api } from "./api.js";

const updateProfile = async (data, id) => {
    try {
        const response = await api.put(`/users/${id}`, {
            email: data.email,
            name: data.name,
            date: data.date,
        })
        return response;
    } catch (error) {
        console.log("Error update profile");
        throw (error)
    }
}

export const apiProfile = {
    updateProfile
}