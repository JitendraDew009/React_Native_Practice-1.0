import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const users = [
  { id: '1', name: 'Ranu Kaushik', logo: 'R',mute: 'MUTE', backgroundColor: '#8e24aa' },
  { id: '2', name: 'Kirti Bareth', logo: 'K',mute: 'MUTE', backgroundColor: '#014d70' },
  { id: '3', name: 'Jitendra Dewangan',logo: 'J', mute: 'MUTE', backgroundColor: '#6f4366' },
  { id: '4', name: 'Anshika Dubey',logo: 'A',mute: 'MUTE', backgroundColor: '#8b5877' },
  { id: '5', name: 'Tushar Sahu',logo: 'T', mute: 'MUTE', backgroundColor: '#1f3781' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
              <Text style={styles.mutetext}>{item.mute}</Text>

              <View style= {styles.box2}>
            <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
              </View>
              </View>
            <View style={styles.box3}> 
            <Text style={styles.nameText}>{item.name}</Text>
            </View>
          </View>
        )}
              />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: 'black',  
  },
  card: {
    width: 220,
    height: 250,
    borderRadius: 25,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',   
  },
  mutetext: {
    position: 'absolute',
    top: 15,
    right: 20,
    color: "white",
    fontWeight: "bold"
  },
  box2:{
    borderWidth:0,
    justifyContent:"flex-end",
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff33',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
  },
  avatarText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
     },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    },
  box3: {
    borderWidth:0,
    alignSelf:"flex-start" ,
    margin: 20
    // justifyContent:"" ,
  },

  nameText: {
    // position: 'absolute',
    color: 'white',
    // marginTop: 10,
    fontSize: 14,
    // top: 60,
    justifyContent:'flex-start',
    },
});