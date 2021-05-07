import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
//Components
import { Home } from '@screens'
const StackNavigator = createStackNavigator()

const Routes = () => {
   return (
      <NavigationContainer>
         <StackNavigator.Navigator headerMode={'none'}>
            <StackNavigator.Screen name="Home" component={Home} />
         </StackNavigator.Navigator>
      </NavigationContainer>
   )
}

export default Routes
