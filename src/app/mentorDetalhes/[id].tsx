import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import { findMentorById, findMentors } from "@/src/api/mentors/findMentors";
import { useEffect, useState } from "react";
import { Mentor } from "../mentores";

export default function MentorDetalhes() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [mentor, setMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    const fetchMentor = async () => {
      if (id) {
        try {
          const data = await findMentorById(id as string);
          setMentor(data);
        } catch (error) {
          console.error("Erro ao buscar mentor:", error);
        }
      }
    };

    fetchMentor();
  }, [id]);

  if (!mentor) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Mentor não encontrado 😢</Text>
      </View>
    );
  }

  const handleMensagem = () => {
    Alert.alert(
      "Mensagem enviada!",
      `Você enviou uma mensagem para ${mentor.nome}.`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{mentor.nome}</Text>
      <Text style={styles.area}>{mentor.telefone}</Text>
      <Text style={styles.email}>{mentor.email}</Text>
      <Text style={styles.description}>{mentor.tipoPerfil}</Text>

      <TouchableOpacity style={styles.button} onPress={handleMensagem}>
        <Text style={styles.buttonText}>Enviar mensagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#555" }]}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9ff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#023e8a",
    marginBottom: 5,
  },
  area: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#0077b6",
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#0077b6",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
