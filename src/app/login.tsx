import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, Link } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha e-mail e senha.");
      return;
    }

    try {
      // Aqui você poderia fazer requisição à API
      // Exemplo: const response = await api.post("/login", { email, senha });

      // Simulação de login bem-sucedido
      const usuario = { email, token: "fakeToken123" };

      await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
      Alert.alert("Sucesso", "Login realizado com sucesso!");

      // Redireciona para a página mentorados
      router.push("/mentorados");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível realizar o login. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo 👋</Text>
      <Text style={styles.subtitle}>Entre para acessar sua conta</Text>

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
        placeholder="Senha"
        placeholderTextColor="#888"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Link para cadastro */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Não tem conta?</Text>
        <Link href="/cadastro" asChild>
          <TouchableOpacity>
            <Text style={styles.registerLink}> Se registre agora</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#023e8a",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
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
  link: {
    color: "#0077b6",
    marginTop: 15,
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    color: "#333",
  },
  registerLink: {
    fontSize: 16,
    color: "#0077b6",
    fontWeight: "bold",
  },
});
