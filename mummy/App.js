import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native';
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
      <Image style={styles.Filter} source={require('./Filter.png')}/>
      </View>

      <View style={styles.midSection}>
      <Text style={styles.categoryText}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardsSection}>
                <View style={styles.card}>

                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                    
                </View>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                </View>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                </View>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                </View>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                </View>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                </View>
                <View style={styles.card}>

                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                </View>
                <View style={styles.card}>

                    <Image style={styles.cardImage} source={require('./catCard.png')} />
                </View>
            </ScrollView>

            
                
            </View>

            <View style={styles.lastSection}>
            <Text style={styles.ongoing}>Ongoing Tasks</Text>
            <FlatList style={styles.Flatlist}
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />  

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

  Filter: {
    marginLeft: 32,

  },

  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },

  categoryText: {

    fontWeight: 'bold',
    fontSize: 17,
    margin: 10,
    marginLeft: 20,

},

  cardImage: {
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 30,
  },

  ongoing: {

    fontWeight: 'bold',
    fontSize: 17,
    margin: 10,
    marginLeft: 20,
  },



  item: {

    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#FBF9F7',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: "#E8D1BA",
    borderWidth: 1,
    
  },




});
