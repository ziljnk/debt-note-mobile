import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';


const Settings = () => {


  return (
    <View style={styles.center}>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    center: {
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center',
             },
})