import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate('Login');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/Images/Logo.png')}
                    />
                </View>

                <Text style={styles.bookShop}>Mafesto of Books</Text>

                <Text style={styles.lorem}>
                    Books are a uniquely portable magic. With our bookstore app, you can carry an entire library in your pocket.
                    Discover new worlds, connect with fellow readers, and unleash your imagination—all at your fingertips!
                </Text>

                <TouchableOpacity style={styles.btnTouch} onPress={navigate}>
                    <Text style={styles.btnSing}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#CECCCC',
        paddingBottom: 50, // Add some padding at the bottom for better spacing
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginTop: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow effect
    },
    logo: {
        width: 332,
        height: 237,
        borderRadius: 10, // Add some rounded corners for a softer look
    },
    bookShop: {
        marginTop: 50,
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2C3E50', // A darker color for better contrast
    },
    lorem: {
        marginTop: 30,
        fontSize: 16,
        textAlign: 'center',
        color: '#34495E', // Change text color for readability
        lineHeight: 24, // Increase line height for better readability
    },
    btnTouch: {
        marginTop: 100,
        width: '90%',
        height: 50,
        backgroundColor: '#0984E3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 5, // Add shadow effect for the button
    },
    btnSing: {
        color: '#FFFCFC',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Home;
