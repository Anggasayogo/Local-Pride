import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LaunchScreen from '../Containers/LaunchScreen'
import BottomNavigator from './BottomNavigation'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
