import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const EmptyNotifications = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icon}></View> 
      <Text style={styles.title}>No notifications yet</Text>
      <Text style={styles.subtitle}>Your notification will appear here once you’ve received them.</Text>

      <TouchableOpacity>
        <Text style={styles.link} onPress={() => navigation.navigate('NotificationSettings')} >Go to historical notifications.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#A0C4FF', // Placeholder for the mail icon
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
