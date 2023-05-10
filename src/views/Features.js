import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Chart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Text>Features</Text>
      <Button  onPress={() => {
        navigation.navigate("Login");
      }}>OK</Button>

    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
    center: {
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center',
             },
})