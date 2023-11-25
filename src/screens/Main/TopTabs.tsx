import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GlobalColors } from '../../infastructure/GlobalColors';
import Dashboard from './Dashboard';
import MapView from './home/MapView';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle:{
            backgroundColor: 'white',
            position:'relative',
           
        },
        tabBarActiveTintColor:GlobalColors.primary.level3Green,
        tabBarInactiveTintColor:'grey',
        tabBarIndicatorStyle:{
            width:0,
            height:0
        },
    }} initialRouteName='Home'>
      <Tab.Screen name="Home" component={Dashboard} options={{tabBarLabel:'All Stores',}}/>
      <Tab.Screen name="map" component={MapView} options={{tabBarLabel:'Map View'}}/>
    </Tab.Navigator>
  );
}

export default MyTabs;