import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const notifications = [
  { id: '1', title: 'Earn Points without making a purchase', date: 'Dec 16, 2023' },
  { id: '2', title: 'Keep paying with Vista to boost rewards', date: 'Dec 12, 2023' },
  { id: '3', title: 'Now you’re a member of Vista rewards club', date: 'Dec 8, 2023' },
];

const NotificationList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <View style={styles.icon}></View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  notification: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF99B2', // Placeholder for the V icon
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});
