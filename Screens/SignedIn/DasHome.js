import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DasHome = ({ navigation }) => {

    const goToMobile = () => {
        navigation.navigate('Mobile');
    }

    const goToInformation = () => {
        navigation.navigate('Information');
    }

    const goToWeb = () => {
        navigation.navigate('Web');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header Section */}
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>Online Learning</Text>

                    <TouchableOpacity style={styles.searchIconContainer}>
                        <Fontisto name="search" size={20} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={styles.profileImage}
                            source={require('../../assets/Images/person.jpg')}
                        />
                    </TouchableOpacity>
                </View>

                {/* Book Overview Section */}
                <View style={styles.overviewContainer}>
                    <Text style={styles.overviewText}>Book Overview</Text>

                    {/* Mobile Development */}
                    <TouchableOpacity onPress={goToMobile}>
                        <View style={styles.bookItem}>
                            <Image
                                style={styles.bookImage}
                                source={require('../../assets/Images/Mobile.jpg')}
                            />
                            <Text style={styles.bookText}>EEI3269 - Introduction to Mobile {'\n'}Application Development</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Information Systems */}
                    <TouchableOpacity onPress={goToInformation}>
                        <View style={styles.bookItem}>
                            <Image
                                style={styles.bookImage}
                                source={require('../../assets/Images/Cover2.jpg')}
                            />
                            <Text style={styles.bookText}>EEI3266 - Information Systems {'\n'}and Data Management</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Web Development */}
                    <TouchableOpacity onPress={goToWeb}>
                        <View style={styles.bookItem}>
                            <Image
                                style={styles.bookImage}
                                source={require('../../assets/Images/web.jpg')}
                            />
                            <Text style={styles.bookText}>EEI3346 - WEB Development</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Software Engineering */}
                    <TouchableOpacity onPress={goToWeb}>
                        <View style={styles.bookItem}>
                            <Image
                                style={styles.bookImage}
                                source={require('../../assets/Images/LMS_cover.jpg')}
                            />
                            <Text style={styles.bookText}>EEX3467 - Software Engineering Concepts and Programming</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Object-Oriented Programming */}
                    <TouchableOpacity onPress={goToWeb}>
                        <View style={styles.bookItem}>
                            <Image
                                style={styles.bookImage}
                                source={require('../../assets/Images/oop.png')}
                            />
                            <Text style={styles.bookText}>EEI3262 - Introduction to Object {'\n'}Oriented Programming</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    searchIconContainer: {
        marginLeft: 110,
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    overviewContainer: {
        marginTop: 50,
        borderWidth: 1,
        borderColor: '#CECCCC',
        padding: 10,
        borderRadius: 5,
    },
    overviewText: {
        fontWeight: 'bold',
    },
    bookItem: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#CECCCC',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    bookImage: {
        width: 60,
        height: 50,
    },
    bookText: {
        marginLeft: 30,
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 15,
    },
});

export default DasHome;
