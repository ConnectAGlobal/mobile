import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, Link } from "expo-router";
import { register } from "../api/auth/auth";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipoPerfil, setTipoPerfil] = useState("mentorado"); // "mentor" ou "mentorado"

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !telefone || !tipoPerfil) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      
      await register(nome, email, senha, telefone, tipoPerfil);
      Alert.alert("Cadastro realizado!", `Bem-vindo(a), ${nome}!`);
      // Navega automaticamente para a tela de login
      router.push("/login");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta 📝</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#888"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo de perfil (mentor ou mentorado)"
        placeholderTextColor="#888"
        value={tipoPerfil}
        onChangeText={setTipoPerfil}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Já tem conta?</Text>
        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text style={styles.loginLink}> Entre agora</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#023e8a",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0077b6",
    padding: 12,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  loginText: {
    fontSize: 16,
    color: "#333",
  },
  loginLink: {
    fontSize: 16,
    color: "#0077b6",
    fontWeight: "bold",
  },
});
