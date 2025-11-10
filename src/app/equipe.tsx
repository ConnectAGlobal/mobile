import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Equipe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👥 Equipe ConnectA</Text>

      <View style={styles.memberCard}>
        {/* Espaço reservado para imagem */}
        <View style={styles.imagePlaceholder}>
          {/* Exemplo futuro: 
          <Image source={require("../assets/vinicius.jpg")} style={styles.image} /> 
          */}
        </View>
        <View>
          <Text style={styles.memberName}>Vinicius Coutinho</Text>
          <Text style={styles.memberRole}>👩‍💻 Desenvolvedor Front-end</Text>
        </View>
      </View>

      <View style={styles.memberCard}>
        <View style={styles.imagePlaceholder}>
          {/* <Image source={require("../assets/thiago.jpg")} style={styles.image} /> */}
        </View>
        <View>
          <Text style={styles.memberName}>Thiago Sales</Text>
          <Text style={styles.memberRole}>👨‍💻 Desenvolvedor Full Stack</Text>
        </View>
      </View>

      <View style={styles.memberCard}>
        <View style={styles.imagePlaceholder}>
          {/* <Image source={require("../assets/pedro.jpg")} style={styles.image} /> */}
        </View>
        <View>
          <Text style={styles.memberName}>Pedro Henrique</Text>
          <Text style={styles.memberRole}>👨‍💻 Desenvolvedor Back-end</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 30,
  },
  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "85%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  imagePlaceholder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#d0e8ff",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#023e8a",
  },
  memberRole: {
    fontSize: 14,
    color: "#555",
    marginTop: 3,
  },
});
