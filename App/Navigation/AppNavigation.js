import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LaunchScreen from '../Containers/LaunchScreen'
import HomeScreen from '../Containers/Home/homeScreen'
import DiscountScreen from '../Containers/Discount/DiscountScreen'
import KeranjangScreen from '../Containers/Keranjang/KeranjangScreen'
import ProfileScreen from '../Containers/Profie/ProfileScreen'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discount" component={DiscountScreen} />
        <Stack.Screen name="Keranjang" component={KeranjangScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
