import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home1';
import Login from './Screens/Login';

import Forget from './Screens/Forget1';
import Dashboard from './Screens/SignedIn/Dashboard';
import Mobile from './Screens/Book/Mobile';
import Information from './Screens/Book/Information';
import Web from './Screens/Book/Web';
import Signup from './Screens/Signup';
import NotificationList from './Screens/SignedIn/NotificationList';
import NotificationSettings from './Screens/SignedIn/NotificationSettings';
import EmptyNotifications from './Screens/SignedIn/Notification1';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={Home}  options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="Singup" component={Signup}  options={{headerShown:false}}/>
        <Stack.Screen name="Forget" component={Forget}  options={{headerShown:false}}/>
        <Stack.Screen name="Dashbord" component={Dashboard}  options={{headerShown:false}}/>
        <Stack.Screen name="Mobile" component={Mobile} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="NotificationList" component={NotificationList} options={{ title: 'Notifications' }} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={{ title: 'Notification Settings' }} />
        <Stack.Screen name="EmptyNotifications" component={EmptyNotifications} options={{ title: 'No Notifications' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
