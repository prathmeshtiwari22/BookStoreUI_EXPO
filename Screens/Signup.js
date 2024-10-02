import React from "react"; 
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Signup = ({navigation}) => {
    const navigate = () => {
        navigation.navigate('Signup');
    }

    const backNavigate = () => {
        navigation.navigate('Login');
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                {/*Top View*/}
                <View style={styles.topView}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={backNavigate}>
                        <View style={styles.backButton}>
                            <AntDesign name="left" size={20} style={{color:'#FFFCFC'}} />
                        </View>
                    </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image} source={require('../assets/Images/information.png')} />
                    </View>
                </View>

                {/*Bottom View*/}
                <View style={styles.bottomView}>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>Create Your Account</Text>
                        <Text style={styles.headerSubtitle}>Please enter info to create account</Text>
                    </View>

                    {/*Username*/}
                    <View style={styles.inputContainer}>
                        <View style={styles.txtField}>
                            <AntDesign name="user" size={30} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder='Username'
                            />
                        </View>
                    </View>

                    {/*Email*/}
                    <View style={styles.inputContainer}>
                        <View style={styles.txtField}>
                            <Icon name="email" size={30} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                            />
                        </View>
                    </View>

                    {/*Password*/}
                    <View style={styles.inputContainer}>
                        <View style={styles.txtField}>
                            <Ionicons name="key-outline" size={30} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                secureTextEntry={true}
                            />
                            <Feather name="eye-off" size={30} style={styles.icon} />
                        </View>
                    </View>

                    {/*Re-type Password*/}
                    <View style={styles.inputContainer}>
                        <View style={styles.txtField}>
                            <Ionicons name="key-outline" size={30} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder='Re-type Password'
                                secureTextEntry={true}
                            />
                            <Feather name="eye-off" size={30} style={styles.icon} />
                        </View>
                    </View>

                    {/*Sign In Button*/}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.btnSignIn}>
                            <Text style={styles.buttonText}>Sign In</Text>
                            <AntDesign name="rightcircle" size={20} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>

                    {/*Already have an account?*/}
                    <View style={styles.alreadyAccount}>
                        <TouchableOpacity style={styles.forget} onPress={backNavigate}>
                            <Text style={styles.alreadyAccountText}>
                                Already have an account? <Text style={styles.loginText}>Login here</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#2980B9',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    topView: {
        width: '100%',
        height: '35%',
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
    image: {
        width: 260, 
        height: 160,
    },
    bottomView: {
        width: '100%',
        height: '65%',
        backgroundColor: '#F4F4F4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        marginTop: 2,
        fontSize: 12,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    txtField: {
        width: '90%', 
        height: 50, 
        borderColor: '#818181', 
        borderWidth: 1, 
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 15,
        color: '#818181',
    },
    input: {
        height: 50,
        width: '75%',
        fontSize: 15,
        marginLeft: 15,
        color: '#818181',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    btnSignIn: {
        width: '90%',
        height: 50,
        backgroundColor: '#0984E3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
    },
    buttonText: {
        color: '#FFFCFC',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonIcon: {
        marginLeft: 10, // Adjusted to keep icon closer to text
        color: '#FFFCFC',
    },
    alreadyAccount: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
    },
    alreadyAccountText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    loginText: {
        color: 'blue',
    },
});

export default Signup;
