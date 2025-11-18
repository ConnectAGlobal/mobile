import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { logout } from "../api/auth/auth";

export default function Home() {

  const router = useRouter();

  return (
    <LinearGradient
      colors={["#0077b6", "#00b4d8", "#90e0ef"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/foguete.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>ConnectA</Text>
        <Text style={styles.subtitle}>Conectando gerações. Criando futuros.</Text>

        <Text style={styles.paragraph}>
          Uma plataforma que une jovens e profissionais experientes para
          reinventar o futuro do trabalho. Com IA, mentoria e aprendizado
          inteligente, o ConnectA transforma experiência em oportunidade.
        </Text>

        <TouchableOpacity style={styles.startButton} onPress={() => router.push('/login')}>
          <Text style={styles.startButtonText}>Começar 🚀</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 18,
    color: "#e0f7ff",
    marginTop: 8,
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  paragraph: {
    fontSize: 16,
    color: "#f5f5f5",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: "#023e8a",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
