import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ConnectA!</Text>

      <View style={styles.links}>
        <Link href="/mentores" asChild><TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Mentores</Text></TouchableOpacity></Link>
        <Link href="/mentorados" asChild><TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Mentorados</Text></TouchableOpacity></Link>
        <Link href="/trilhas" asChild><TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Trilhas</Text></TouchableOpacity></Link>
        <Link href="/equipe" asChild><TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Equipe</Text></TouchableOpacity></Link>
        <Link href="/commit" asChild><TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Último Commit</Text></TouchableOpacity></Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f1f1f1" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  links: { gap: 10 },
  button: { backgroundColor: "#0077b6", padding: 10, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
