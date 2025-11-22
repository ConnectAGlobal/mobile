import { API_URL } from "../config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const AUTH_URL = API_URL + "/auth";

export const login = async (email: string, senha: string) => {
    try {
    const response = await axios.post(`${AUTH_URL}/login`, { email: email, senha: senha });
    if(response.status !== 200) {
        Alert.alert("Erro de autenticação", response.data.message || "Não foi possível fazer login.");
        return;
    }
    await AsyncStorage.setItem("token", response.data.token);
    } catch (error) {
        console.error("Erro ao fazer login:", error);
    }

};

export const register = async (nome: string, email: string, senha: string, telefone: string, tipoPerfil: string) => {
    const response = (await axios.post(`${AUTH_URL}/register`, { nome, email, senha, telefone, tipoPerfil })).data;
    if (response == null) return false
    return true;
};

export const logout = async () => {
    await AsyncStorage.removeItem("token");
};


