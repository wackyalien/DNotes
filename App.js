import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Local Files
import Dashboard from './Screens/Dashboard';
import Savedwords from './Screens/Savedwords';


const DashboardStack = createStackNavigator();
const DashboardStackScreen = ({navigation})=>(
  <DashboardStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <DashboardStack.Screen name="Dashboard" style={{ flex: 1, justifyContent: 'flex-start',marginLeft:20 }} component={Dashboard} options={{
      title:'Dashboard',
      headerLeft: () =>(
        <FontAwesome5 name="bars" size={20} backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}}/>
      )
    }} />
  </DashboardStack.Navigator>
)


const SavewordsStack = createStackNavigator();
const SavewordsStackScreen = ({navigation})=>(
  <SavewordsStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <SavewordsStack.Screen name="Home" component={Savedwords} options={{
      title:'Words', 
      headerLeft: () =>(
        <FontAwesome5 name="bars" size={20}  backgroundColor="#009387" onPress={() =>{navigation.openDrawer()}}/>
      )
    }} />
  </SavewordsStack.Navigator>
)

const Drawer = createDrawerNavigator();
function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name='Dashboard' component={DashboardStackScreen}/>
        <Drawer.Screen name='Words' component={SavewordsStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;
