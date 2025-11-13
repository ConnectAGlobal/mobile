import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const trilhas = [
  {
    id: "1",
    titulo: "Trilha de React Native",
    descricao: "Aprenda a criar aplicativos móveis com React Native e Expo.",
    nivel: "Intermediário",
  },
  {
    id: "2",
    titulo: "Trilha de JavaScript",
    descricao: "Fundamentos do JavaScript moderno, ES6+, e boas práticas.",
    nivel: "Iniciante",
  },
  {
    id: "3",
    titulo: "Trilha de TypeScript",
    descricao: "Domine o TypeScript e escreva código mais seguro e escalável.",
    nivel: "Intermediário",
  },
  {
    id: "4",
    titulo: "Trilha de Backend com Node.js",
    descricao: "Crie APIs poderosas e performáticas usando Node.js e Express.",
    nivel: "Avançado",
  },
  {
    id: "5",
    titulo: "Trilha de UI/UX Design",
    descricao: "Entenda os princípios de design e crie interfaces incríveis.",
    nivel: "Iniciante",
  },
];

export default function Trilhas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trilhas de Aprendizado</Text>

      <FlatList
        data={trilhas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.nivel}>Nível: {item.nivel}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  descricao: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  nivel: {
    fontSize: 13,
    marginTop: 8,
    fontStyle: "italic",
    color: "#777",
  },
});
