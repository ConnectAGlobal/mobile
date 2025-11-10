import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🚀 Bem-vindo ao ConnectA!</Text>

      <Text style={styles.subtitle}>
        A plataforma que conecta gerações e impulsiona o futuro do trabalho.
      </Text>

      <Text style={styles.paragraph}>
        O <Text style={styles.highlight}>ConnectA</Text> prepara jovens e profissionais para as 
        carreiras do amanhã, unindo aprendizado, mentoria e tecnologia. 
        Uma ponte entre experiência e inovação — com IA que potencializa, 
        não substitui, o ser humano.
      </Text>

      <Text style={styles.paragraph}>
        🌍 Promove inclusão e reduz desigualdades (ODS 10).{"\n"}
        🤖 Usa IA Generativa para transformar experiências em desafios.{"\n"}
        🧩 Integra microsserviços em Java e .NET com foco em requalificação e matching inteligente.
      </Text>

      <Link href="/mentores" asChild>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Começar</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: "#555",
    textAlign: "justify",
    lineHeight: 22,
    marginBottom: 15,
  },
  highlight: {
    color: "#0077b6",
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
