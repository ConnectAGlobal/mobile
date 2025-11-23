import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Commit() {
  const [hash, setHash] = useState("f89e4ef355afe5e490d7262ace65ccb130809daa");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧩 Último Commit</Text>

      <Text style={styles.subtitle}>
        Consulte ou altere o hash do commit mais recente.
      </Text>

      <TextInput
        style={styles.input}
        value={hash}
        onChangeText={setHash}
        placeholder="Digite o hash do commit"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>

      <View style={styles.commitBox}>
        <Text style={styles.commitLabel}>Hash atual:</Text>
        <Text style={styles.commitHash}>{hash}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#0077b6",
    borderRadius: 12,
    padding: 10,
    width: "80%",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#0077b6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    backgroundColor: "#0077b6",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  commitBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#e0f7ff",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#90e0ef",
  },
  commitLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  commitHash: {
    fontSize: 20,
    color: "#023e8a",
    fontWeight: "bold",
  },
});
