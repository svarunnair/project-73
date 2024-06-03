// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Detail from '../screens/Detail';
// import TabNavigator from './TabNavigator';
// import DrawerNavigator from './DrawerNavigator';


// const Stack = createNativeStackNavigator();

// function MainStackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
      
//       <Stack.Screen name="MainTabs" component={TabNavigator} />
//       <Stack.Screen name='Drawer' component={DrawerNavigator}/>
//       <Stack.Screen name="Detail" component={Detail} />
//     </Stack.Navigator>
//   );
// }

// export default MainStackNavigator;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../screens/Detail';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

