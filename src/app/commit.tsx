import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Commit() {
  const [hash, setHash] = useState("abc1234");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Último Commit</Text>
      <TextInput
        style={styles.input}
        value={hash}
        onChangeText={setHash}
        placeholder="Digite o hash do commit"
        placeholderTextColor="#999"
      />
      <Text style={styles.hash}>{hash}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    width: 200,
    textAlign: "center",
  },
  hash: { fontSize: 18, marginTop: 10, color: "#0077b6" },
});
