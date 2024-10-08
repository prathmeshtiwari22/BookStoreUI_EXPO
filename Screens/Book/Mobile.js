import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Mobile = () => {
    return (
        <ScrollView>
            <View style={styles.Book}>
                <View>
                    <Image
                        style={styles.bookImage}
                        source={require('../../assets/Images/Mobile.jpg')}
                    />
                </View>

                <View>
                    <Text style={styles.EEI}>
                        EEI3269 - Introduction to {'\n'}Mobile Application {'\n'}Development
                    </Text>
                </View>
            </View>

            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Author:</Text>
                <Text style={{ fontSize: 20 }}> Ms. Kamsharine Thayananthan</Text>
            </View>

            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Description:</Text>
                <Text style={{ fontSize: 18, textAlign: 'justify' }}>
                    You have logged in to the course EEI3269 - Introduction to Mobile Application Development of the Bachelor of Software Engineering Honours degree programme. This is a 2 credit optional course offered in Year 1.
                </Text>
            </View>

            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price:</Text>
                <Text style={{ fontSize: 18, textAlign: 'justify' }}>1,250.00</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={{ color: '#FFFCFC', fontSize: 20, fontWeight: 'bold' }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bookImage: {
        width: 75,
        height: 75,
        borderRadius: 10,
        padding: 10,
    },

    Book: {
        margin: 20,
        flexDirection: 'row',
    },

    EEI: {
        marginLeft: 20,
        fontSize: 20,
    },

    btnRegister: {
        width: '90%',
        height: 50,
        backgroundColor: '#005CA4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        marginBottom: 100,
    },
});

export default Mobile;
