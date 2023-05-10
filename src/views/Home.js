import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <View style={styles.center3}></View>
      
      <View style={styles.center1}></View>
      <View style={styles.center2}>
        <Text>Home</Text>
        <Button  onPress={() => {
          navigation.navigate("Login");
        }}>OK</Button>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    center: {
               flex: 1,
             },
    center1: {
      backgroundColor: "#22577E",
      alignItems: "center",
      height: '10%',
            },
    center2: {
      backgroundColor: "tomato",
      alignItems: "center",
      height: '85%',
            },
            center3: {
              alignItems: "center",
              height: '5%',
                    },
})