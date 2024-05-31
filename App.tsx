import React from 'react'
import { Text, View } from 'react-native'
import StackNavigation from './src/routes/StackNav'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native'
import Home from './src/screens/Home'
import TabNavigator from './src/routes/TabNavigator'
import MainStackNavigator from './src/routes/StackNav'

function App() {


  return (
      <NavigationContainer>
      <MainStackNavigator />
      </NavigationContainer>
  )
}

export default App
