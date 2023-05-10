import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Chart from '../views/Chart';
import Home from '../views/Home';
import Features from '../views/Features'
import Settings from '../views/Settings';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#21366F"
      inactiveColor="#FFFFFF"
      barStyle={{ backgroundColor: '#3B79D7' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName =focused ? 'home': 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings': 'settings-outline';
          }
          else if (route.name === 'Chart') {
            iconName = focused ? 'bar-chart': 'bar-chart-outline';
            
          }
          else if (route.name === 'Features') {
            iconName = focused ? 'file-tray-full': 'file-tray-full-outline';
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      sceneAnimationType="shifting"
      shifting={true}
      
      >
    
    <Tab.Screen 
    name='Home' 
    component={Home}
    options={{
      tabBarLabel: "Trang chính",
    }}
  />
  <Tab.Screen 
    name='Chart'
    component={Chart}
    options={{
      tabBarLabel: 'Thống kê',
      
    }}
  />
  <Tab.Screen 
    name='Features'
    component={Features}
    options={{
      tabBarLabel: 'Khác',
    }}
  />
  <Tab.Screen 
    name='Settings'
    component={Settings}
    options={{
      tabBarLabel: 'Cài đặt',
    }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator