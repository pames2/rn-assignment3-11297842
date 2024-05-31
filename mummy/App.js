import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.Hello}>
      <Text style={styles.helloText}>Hello, Devs</Text>
      <Text style={styles.smallerText}>14 Tasks Today</Text>
      </View>
      <Image style={styles.avatar} source={require('./profileImage.png')} /> 
      </View>

      <View style={styles.search}>
      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
        />
      </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2e6',
  },

  Hello: {
    marginTop: 70,
    marginLeft: 20,
  },

  helloText: {

    fontWeight: 'bold',

    fontSize: 32,

  },

  smallerText: {
    fontSize: 12,

  },

  avatar: {

    marginTop: 72,
    marginLeft: 290,
    position: 'absolute',

  },


  search: {
    margin: 18,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "70%",
  },

  searchBar:{
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
  },


  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },

});
