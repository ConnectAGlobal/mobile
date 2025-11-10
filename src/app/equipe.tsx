import { View, Text, StyleSheet } from "react-native";

export default function Equipe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipe ConnectA</Text>

      <Text style={styles.member}>👩‍💻 Vinicius Coutinho</Text>
      <Text style={styles.member}>👨‍💻 Thiago Sales</Text>
      <Text style={styles.member}>👨‍💻 Pedro Henrique</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  member: { fontSize: 18, marginVertical: 5 },
});
