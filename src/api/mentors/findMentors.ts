import axios from "axios";
import { API_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const USER_URL = API_URL + "/usuarios/perfil/MENTOR";


export const findMentors = async () => {
    try {
        const response = await axios.get(USER_URL, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
        });

        if (!response.status || response.status !== 200) {
            throw new Error("Erro ao buscar mentores");
        }
        const data = response.data;
        return data.content;
    } catch (error) {
        console.error("Erro na função findMentors:", error);
        throw error;
    }
};

export const findMentorById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/usuarios/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
        });

        if (!response.status || response.status !== 200) {
            throw new Error("Erro ao buscar mentor por ID");
        }
   
        return response.data;
    } catch (error) {
        console.error("Erro na função findMentorById:", error);
        throw error;
    }
};