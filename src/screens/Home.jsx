import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

function Home() {
    const navigation=useNavigation()
  return (
    <View>
        <Text>
            Home page.............
        </Text>
        <Button onPress={()=>(navigation.navigate('Detail'))} title='Next'></Button>
    </View>
  )
}

export default Home
