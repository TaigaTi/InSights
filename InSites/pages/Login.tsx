import { View, Text, ScrollView, TextInput, Button, GestureResponderEvent, TouchableOpacity, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../styles/theme";
import { Image } from "react-native";
import React, { useState } from "react";
import firebaseApp from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import CustomAlert from "../components/Alert";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTitle, setAlertTitle] = useState('');

    const handleLogin = () => {
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAlertTitle("Error");
                setAlertMessage(errorMessage);
                setAlertVisible(true);
            });
    };

    return (
        <View style={styles.container}>
            <CustomAlert
                visible={alertVisible}
                title={alertTitle}
                message={alertMessage}
                buttons={[{
                    text: "OK", onPress: () => {
                        setAlertVisible(false);
                    }
                }]}
                onRequestClose={() => {
                    setAlertVisible(false);
                }}
            />
            <View style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                paddingTop: 80,
            }}>
                <ScrollView
                    style={{
                        width: '95%',
                        height: '85%',
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* App Logo */}
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/icons/insites-logo.png')} style={styles.logo} />
                        <Text style={styles.appName}>InSites</Text>
                        <Text style={styles.slogan}>Track, Analyze, Engage</Text>
                    </View>

                    {/* Login Heading */}
                    <View style={styles.headingContainer}>
                        <Text style={styles.loginHeading}>Login</Text>
                        <Text style={styles.loginSubHeading}>Sign in to continue.</Text>
                    </View>

                    {/* Login Input */}
                    <View style={{ height: 190, justifyContent: 'space-between', paddingBottom: 30, }}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>

                    {/* Switch to Login */}
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.switchToSignup}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* Footer Design */}
            <Image source={require('../assets/images/login-footer.png')} style={styles.footer} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: -10,
    },
    imageContainer: {
        alignItems: 'center',
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    slogan: {
        paddingTop: 10,
        color: colors.orange,
    },
    headingContainer: {
        alignItems: 'center',
        paddingTop: 80,
    },
    loginHeading: {
        fontWeight: 'bold',
        fontSize: 45,
        marginBottom: -5,
    },
    loginSubHeading: {
        color: colors.black,
        opacity: 0.35,
        paddingBottom: 15,
    },
    input: {
        alignSelf: 'center',
        backgroundColor: colors.grey,
        color: colors.black,
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '80%',
        height: 45,
    },
    inputLabel: {
        width: '80%',
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 40,
        opacity: 0.6,
    },
    loginButton: {
        backgroundColor: colors.pink,
        padding: 10,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    loginButtonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    footer: {
        width: '100%',
    },
    switchToSignup: {
        color: colors.black,
        opacity: 0.45,
        textAlign: 'center',
        paddingTop: 10,
    },
});
