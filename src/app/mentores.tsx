import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

interface Mentor {
  id: string;
  nome: string;
  area: string;
  email: string;
  descricao: string;
}

export default function Mentores() {
  const router = useRouter();

  // Lista de mentores (mockada)
  const [mentores] = useState<Mentor[]>([
    {
      id: "1",
      nome: "Ana Silva",
      area: "Tecnologia",
      email: "ana.silva@email.com",
      descricao:
        "Engenheira de software com 8 anos de experiência em desenvolvimento mobile e web.",
    },
    {
      id: "2",
      nome: "Carlos Souza",
      area: "Design",
      email: "carlos.souza@email.com",
      descricao:
        "Designer UX/UI apaixonado por criar experiências intuitivas e acessíveis.",
    },
    {
      id: "3",
      nome: "Mariana Rocha",
      area: "Marketing",
      email: "mariana.rocha@email.com",
      descricao:
        "Especialista em marketing digital e gestão de mídias sociais.",
    },
  ]);

  const handleVerPerfil = (mentor: Mentor) => {
   router.push({ pathname: "/mentorDetalhes/[id]", params: { id: mentor.id } } as any);
  };

  const handleQueroSerMentor = () => {
    alert("Em breve você poderá se cadastrar como mentor oficialmente. 🚀");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Mentores 👨‍🏫</Text>

      {/* Botão "Quero ser mentor" */}
      <TouchableOpacity style={styles.addButton} onPress={handleQueroSerMentor}>
        <Text style={styles.addButtonText}>Quero ser mentor</Text>
      </TouchableOpacity>

      {/* Lista de mentores */}
      <FlatList
        data={mentores}
        keyExtractor={(item) => item.id}
        style={{ width: "100%", marginTop: 20 }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.area}>{item.area}</Text>
            </View>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => handleVerPerfil(item)}
            >
              <Text style={styles.viewButtonText}>Ver perfil</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9ff",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#023e8a",
    textAlign: "center",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#0077b6",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#023e8a",
  },
  area: {
    fontSize: 15,
    color: "#555",
  },
  viewButton: {
    backgroundColor: "#0096c7",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  viewButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
