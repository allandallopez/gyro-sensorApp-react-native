import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { font } from '@utils'

import { TestComponent } from '@components'

const HomePage = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>This is home</Text>

         <TestComponent />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
   },
   title: {
      fontFamily: font.PoppinsSemiBold,
      fontSize: 14,
   },
})

export default HomePage
