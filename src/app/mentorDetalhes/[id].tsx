import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function MentorDetalhes() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Lista simulada (poderia vir de uma API ou AsyncStorage)
  const mentores = [
    {
      id: "1",
      nome: "Ana Silva",
      area: "Tecnologia",
      email: "ana.silva@email.com",
      descricao:
        "Engenheira de software com 8 anos de experiência em desenvolvimento mobile e web.",
    },
    {
      id: "2",
      nome: "Carlos Souza",
      area: "Design",
      email: "carlos.souza@email.com",
      descricao:
        "Designer UX/UI apaixonado por criar experiências intuitivas e acessíveis.",
    },
    {
      id: "3",
      nome: "Mariana Rocha",
      area: "Marketing",
      email: "mariana.rocha@email.com",
      descricao:
        "Especialista em marketing digital e gestão de mídias sociais.",
    },
  ];

  const mentor = mentores.find((m) => m.id === id);

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
      <Text style={styles.area}>{mentor.area}</Text>
      <Text style={styles.email}>{mentor.email}</Text>
      <Text style={styles.description}>{mentor.descricao}</Text>

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
