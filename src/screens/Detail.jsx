import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

function Detail() {
    const navigation=useNavigation()
  return (
    <View>
        <Text>Detail page........</Text>
        <Button title='Back' color={"red"} onPress={()=>(navigation.navigate('Home'))}></Button>
    </View>
  )
}

export default Detail