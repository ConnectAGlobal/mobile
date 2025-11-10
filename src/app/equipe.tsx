import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, ScrollView } from "react-native";

const integrantes = [
  {
    nome: "Pedro Henrique dos Santos",
    rm: "559064",
    github: "https://github.com/Pedro-Henrique3216",
    imagem: "https://avatars.githubusercontent.com/u/137585699?v=4",
  },
  {
    nome: "Vinícius de Oliveira Coutinho",
    rm: "556182",
    github: "https://github.com/ViniOC",
    imagem: "https://avatars.githubusercontent.com/u/103922053?v=4",
  },
  {
    nome: "Thiago Thomaz Sales Conceição",
    rm: "557992",
    github: "https://github.com/ThiagoThmaz",
    imagem: "https://avatars.githubusercontent.com/u/142420181?v=4",
  },
];

export default function Equipe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Equipe ConnectA 💡</Text>
      <Text style={styles.subtitle}>
        Conheça os desenvolvedores por trás do projeto
      </Text>

      {integrantes.map((membro, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: membro.imagem }} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.nome}>{membro.nome}</Text>
            <Text style={styles.rm}>RM: {membro.rm}</Text>

            <TouchableOpacity onPress={() => Linking.openURL(membro.github)}>
              <Text style={styles.github}>🔗 GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: "center",
    backgroundColor: "#f5f9ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#03045e",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 25,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 17,
    fontWeight: "600",
    color: "#023e8a",
  },
  rm: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  github: {
    fontSize: 15,
    color: "#0077b6",
    marginTop: 6,
    fontWeight: "500",
  },
});
