import { View, Text, StyleSheet } from "react-native";

export default function Trilhas() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trilhas de Aprendizado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
