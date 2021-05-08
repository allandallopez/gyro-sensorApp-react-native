import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated from 'react-native-reanimated'

function ThreedCube() {
   return (
      <Animated.View style={styles.cardContainer}>
         <LinearGradient
            colors={['#55efc4', '#a29bfe']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[{ height: 200, width: 200 }, styles.cardBody]}
         />
      </Animated.View>
   )
}

const styles = StyleSheet.create({
   cardContainer: {
      height: '100%',
      width: '100%',
      paddingHorizontal: 30,
      paddingVertical: 30,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: -80,
   },

   cardBody: {
      borderRadius: 5,
      margin: 10,
      opacity: 0.9,
   },
})

export default ThreedCube
