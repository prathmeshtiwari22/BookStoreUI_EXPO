import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Forget = ({ navigation }) => {

    const backNavigate = () => {
        navigation.navigate('Login');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Top View */}
                <View style={styles.topView}>
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={backNavigate}>
                            <View style={styles.backButton}>
                                <AntDesign name="left" size={20} style={styles.backIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image}
                            source={require('../assets/Images/password.png')}
                        />
                    </View>
                </View>

                {/* Bottom View */}
                <View style={styles.bottomView}>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>
                            Please enter your registered email address and we will email you a reset password link
                        </Text>
                    </View>
                    {/* Email Input */}
                    <View style={styles.inputContainer}>
                        <View style={styles.txtEmail}>
                            <Icon name="email" size={30} style={styles.iconStyle} />
                            <View style={styles.divider}></View>
                            <TextInput
                                style={styles.textInput}
                                placeholder='E-mail'
                                placeholderTextColor='#818181'
                            />
                        </View>
                    </View>

                    {/* Send Reset Link Button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.btnSendReset}>
                            <Text style={styles.btnText}>Send reset link</Text>
                            <AntDesign name="rightcircle" size={20} style={styles.btnIcon} />
                        </TouchableOpacity>
                    </View>

                    {/* Back to Login */}
                    <View style={styles.backToLoginContainer}>
                        <TouchableOpacity onPress={backNavigate}>
                            <Text style={styles.backToLoginText}>Back to Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980B9',
        justifyContent: 'center'
    },
    topView: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
    },
    backButton: {
        width: 30,
        height: 30,
        borderWidth: 1,
        marginLeft: 25,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    backIcon: {
        color: '#FFFCFC',
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
    },
    bottomView: {
        width: '100%',
        height: '50%',
        paddingTop: 20,
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    descriptionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '88%',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    txtEmail: {
        width: '90%',
        height: 50,
        borderColor: '#818181',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        marginLeft: 15,
        color: '#818181',
    },
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: '#818181',
        marginLeft: 15,
    },
    textInput: {
        height: 50,
        width: '100%',
        fontSize: 15,
        marginLeft: 15,
        color: '#818181',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    btnSendReset: {
        width: '90%',
        height: 50,
        backgroundColor: '#0984E3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
    },
    btnText: {
        color: '#FFFCFC',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80,
    },
    btnIcon: {
        marginLeft: 50,
        color: '#FFFCFC',
    },
    backToLoginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    backToLoginText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default Forget;
