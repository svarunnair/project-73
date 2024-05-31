// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../screens/Home';
// import About from '../screens/About';
// import Detail from '../screens/Detail';
// import { useRoute } from '@react-navigation/native';
// import { ScrollView, View } from 'react-native';

// const Tab = createBottomTabNavigator();
// const Stack= createNativeStackNavigator()

// const HomeScreen=()=>{
//     return(
//     <Stack.Navigator screenOptions={{headerShown:false}}>
//     <Stack.Screen name='Home' component={Home}/>
//     <Stack.Screen name='Detail' component={Detail}/>
//     </Stack.Navigator> 
//     )  
// }


// const AboutScreen=()=>{
//     return(
//     <Stack.Navigator screenOptions={{headerShown:false}}>
//     <Stack.Screen name='About' component={About}/>
//     </Stack.Navigator> 
//     )  
// }

// function TabNavigator() {
    
//   return (
 
//     <Tab.Navigator screenOptions={{headerShown:false, }}>
    
//        <Tab.Screen name="Home" component={HomeScreen} /> 
//        <Tab.Screen name="About" component={AboutScreen} /> 
//     </Tab.Navigator>
       
   
//   );
// }

// export default TabNavigator



import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // or 'react-native-vector-icons/Ionicons' if you are not using Expo
import Home from '../screens/Home';
import About from '../screens/About';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'AboutStack') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          return 
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="AboutStack" component={AboutStack} options={{ title: 'About' }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
