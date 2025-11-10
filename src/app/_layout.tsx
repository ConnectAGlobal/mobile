import { Drawer } from "expo-router/drawer";
import { ThemeProvider, useThemeContext } from "../contexts/ThemeContext";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavThemeProvider,
} from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

function DrawerLayout() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  return (
    <NavThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark ? "#111" : "#fff",
          },
          headerTintColor: isDark ? "#fff" : "#111",
          drawerActiveBackgroundColor: isDark ? "#333" : "#ddd",
          drawerActiveTintColor: isDark ? "#fff" : "#111",
          drawerInactiveTintColor: isDark ? "#aaa" : "#666",
          drawerStyle: {
            backgroundColor: isDark ? "#000" : "#f9f9f9",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Início",
            drawerIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="commit"
          options={{
            title: "Sobre o App",
            drawerIcon: ({ color, size }) => (
              <Feather name="info" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="equipe"
          options={{
            title: "Nossa Equipe",
            drawerIcon: ({ color, size }) => (
              <Feather name="users" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="mentores"
          options={{
            title: "Mentores",
            drawerIcon: ({ color, size }) => (
              <Feather name="user-check" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="mentorados"
          options={{
            title: "Mentorados",
            drawerIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="trilhas"
          options={{
            title: "Trilhas de aprendizado",
            drawerIcon: ({ color, size }) => (
              <Feather name="book-open" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </NavThemeProvider>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <DrawerLayout />
    </ThemeProvider>
  );
}
