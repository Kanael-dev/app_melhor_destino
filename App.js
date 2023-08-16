import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: 1,
    localizacao: "Londres",
    periodo: "5 dias",
    foto: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    localizacao: "Brasil",
    periodo: "3 dias",
    foto: "https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    localizacao: "India",
    periodo: "6 dias",
    foto: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 4,
    localizacao: "Chile",
    periodo: "5 dias",
    foto: "https://images.unsplash.com/photo-1546800273-4d63ff843853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 5,
    localizacao: "Africa",
    periodo: "10 dias",
    foto: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
  },
];

// Poderia fazer uma pasta src com components? poderia... mas não quero
const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.foto }} style={styles.imagemLocalizacao} />
    <View style={styles.textosItems}>
      <Text style={styles.location}>{item.localizacao}</Text>
      <Text style={styles.periodo}>{item.periodo}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      {/* Menu do topo */}
      <View style={styles.menuTopo}>
        <Text style={styles.tituloPrincipal}>
          Melhor <Text style={styles.tituloDestacado}>destino</Text>
        </Text>
        <TouchableOpacity style={styles.btnAirplane}>
          <Ionicons name="airplane-outline" size={32} color="grey" />
        </TouchableOpacity>
      </View>

      {/* Lista com os items */}
      <View style={styles.containerItems}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Menu inferior */}
      <View style={styles.containerOpcoes}>
        <View style={styles.containerStylesOpcoes}>
          <View style={styles.opcaoSubItems}>
            <TouchableOpacity>
              <Ionicons name="home-outline" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.tituloItems}>Home</Text>
          </View>

          <View style={styles.opcaoSubItems}>
            <TouchableOpacity>
              <Ionicons name="map-outline" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.tituloItems}>Mapa</Text>
          </View>

          <View style={styles.opcaoSubItems}>
            <TouchableOpacity>
              <Ionicons name="receipt-outline" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.tituloItems}>Transações</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  menuTopo: {
    width: "100%",
    height: "10%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  tituloPrincipal: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#808080",
  },
  tituloDestacado: {
    color: "#000080",
  },
  btnAirplane: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  containerItems: {
    height: "70%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    height: 250,
    width: 350,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 20,
  },
  imagemLocalizacao: {
    height: 150,
    width: "90%",
    resizeMode: "cover",
    borderRadius: 20,
    margin: 10,
  },
  textosItems: {
    width: "90%",
    height: 50,
  },
  location: {
    fontSize: 21,
    fontWeight: "bold",
  },
  periodo: {
    fontSize: 16,
    fontWeight: 400,
  },
  containerOpcoes: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerStylesOpcoes: {
    height: "90%",
    width: "90%",
    backgroundColor: "rgba(0, 0, 128, 0.8)",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  opcaoSubItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  tituloItems: {
    color: "#fff",
  },
});
