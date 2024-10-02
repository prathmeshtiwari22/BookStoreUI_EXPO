import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NotificationSettings = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Get notified about important stuff</Text>
            <Text style={styles.subheading}>We’ll notify you when</Text>

            <View style={styles.notificationOptions}>
                <Text style={styles.option}>📄 Your payment is due</Text>
                <Text style={styles.option}>🛒 You make a new purchase</Text>
                <Text style={styles.option}>📦 Your order is on the way</Text>
                <Text style={styles.option}>🏷️ We’ve got deals and products we think you’ll like</Text>
            </View>

            {/* "Go to Notification List" Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.singleButton} onPress={() => navigation.navigate('NotificationList')}>
                    <Text style={styles.buttonText}>Go to Notification List</Text>
                </TouchableOpacity>
            </View>

            {/* "Later" and "Get Notified" Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Later</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.activeButton]}>
                    <Text style={styles.buttonText}>Get notified</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NotificationSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8F8F8',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    notificationOptions: {
        marginBottom: 20,
    },
    option: {
        fontSize: 16,
        paddingVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10, // Added margin for vertical spacing between button sections
    },
    singleButton: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    button: {
        flex: 0.48,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#000',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});
