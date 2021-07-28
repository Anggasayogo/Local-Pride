import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
// Screen
import HomeScreen from '../Containers/Home/homeScreen'
import DiscountScreen from '../Containers/Discount/DiscountScreen'
import KeranjangScreen from '../Containers/Keranjang/KeranjangScreen'
import ProfileScreen from '../Containers/Profie/ProfileScreen'

// styes
import Images from '../Images'
const { IcHome, IcDisc, IcBuy, IcProfile } = Images
import { apply } from '../Themes/OsmiProvider'


const TabNavigator = createBottomTabNavigator()

const BottomNavigator = () => (
    <TabNavigator.Navigator 
        initialRouteName="Home" 
        tabBar={(props) =>(
            <View>
              <BottomTabBar
                {...props}
              />
            </View>
        )}
        tabBarOptions={{
          style: {height: 60},
          showLabel: false,
        }}
      >
        <TabNavigator.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: (props) => (
                <IcHome/>
            )
          }}/>
        <TabNavigator.Screen 
          name="Discount" 
          component={DiscountScreen} 
          options={{
            tabBarIcon: (props) => (
                <IcDisc/>
            )
          }}/>
        <TabNavigator.Screen 
          name="Keranjang" 
          component={KeranjangScreen} 
          options={{
            tabBarIcon: (props) => (
                <IcBuy/>
            )
          }}/>
        <TabNavigator.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: (props) => (
                <IcProfile/>
            )
          }}/>      
    </TabNavigator.Navigator>
)

export default BottomNavigator