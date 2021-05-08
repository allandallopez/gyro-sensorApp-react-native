import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, SafeAreaView, Text, Dimensions } from 'react-native'
import { gyroscope } from 'react-native-sensors'
import Animated, {
   Easing,
   interpolate,
   useAnimatedStyle,
   useDerivedValue,
   useSharedValue,
   withSpring,
} from 'react-native-reanimated'

import { ThreeDCube } from '@components'
import { font } from '@utils'

const HomePage = () => {
   const refContainer = useRef()
   const gyroValue = useSharedValue({ x: 0, y: 0, z: 0 })
   const prev = useSharedValue({ x: 0, y: 0 })
   const derivedTranslations = useDerivedValue(() => {
      'worklet'
      const MAX_X = 40
      const MAX_Y = 40

      let newX = prev.value.x + gyroValue.value.y * -2
      let newY = prev.value.y + gyroValue.value.x * -2

      if (Math.abs(newX) >= MAX_X) {
         newX = prev.value.x
      }
      if (Math.abs(newY) >= MAX_Y) {
         newY = prev.value.y
      }
      prev.value = {
         x: newX,
         y: newY,
      }
      return {
         x: newX,
         y: newY,
      }
   }, [gyroValue.value])

   useEffect(() => {
      const subscription = gyroscope.subscribe(({ x, y, z }) => {
         gyroValue.value = { x, y, z }
      })
      return () => {
         subscription.unsubscribe()
      }
   }, [gyroValue.value])

   const AnimatedStyles = {
      motion: useAnimatedStyle(() => {
         const inputRange = [-100, 0, 100]

         const outputRange = [-20, 0, 20]
         return {
            transform: [
               {
                  translateX: withSpring(
                     interpolate(derivedTranslations.value.x, inputRange, outputRange, Easing.bezier(0.16, 1, 0.3, 1))
                  ),
               },
               {
                  translateY: withSpring(
                     interpolate(derivedTranslations.value.y, inputRange, outputRange, Easing.bezier(0.16, 1, 0.3, 1))
                  ),
               },
            ],
         }
      }),
   }

   return (
      <SafeAreaView>
         <View ref={refContainer} style={styles.container}>
            <View style={{ width: '50%' }}>
               <Text style={styles.title}>Move your phone to see the glitch</Text>
            </View>
            <Animated.Image
               source={require('../../assets/images/background-example.jpeg')}
               style={[styles.backgroundContainer]}
               blurRadius={2}
               resizeMode="cover"
            />
            <Animated.View style={AnimatedStyles.motion}>
               <ThreeDCube />
            </Animated.View>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   backgroundContainer: {
      position: 'absolute',
      alignItems: 'center',
      aspectRatio: 1,
      bottom: '-5%',
      width: '100%',
      height: '120%',
   },
   title: {
      fontFamily: font.PoppinsSemiBold,
      color: '#fff',
      fontSize: 24,
      zIndex: 99,
      marginTop: Dimensions.get('screen').height / 2,
      textAlign: 'center',
   },
   rotateView: {
      width: 100,
      height: 100,
      backgroundColor: 'white',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 0.2,
   },
})

export default HomePage
