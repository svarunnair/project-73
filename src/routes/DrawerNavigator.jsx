import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return (
   
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Detail' component={Detail} />
            </Drawer.Navigator>
    )
}