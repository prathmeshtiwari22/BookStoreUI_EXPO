import React from "react"; 
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Notification1 from './Notification1';
import Profile from './Profile';
import DasHome from "./DasHome";


const Tab = createBottomTabNavigator();

const Dashboard = () => { 
    return (
        <Tab.Navigator>
            {/* Home Tab */}
            <Tab.Screen
                name="Home"
                component={DasHome}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />

            {/* Notifications Tab */}
            <Tab.Screen
                name="Notifications"
                component={Notification1}
                options={{
                    tabBarLabel: 'Notifications',
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications-outline" color={color} size={size} />
                    ),
                }}
            />

            {/* User Profile Tab */}
            <Tab.Screen
                name="User"
                component={Profile}
                options={{
                    tabBarLabel: 'User',
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Dashboard;
