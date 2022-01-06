import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'

import { MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({route, navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function check() {
        if (username == "admin" && password == 'admin'){
            setMessage("")
            navigation.navigate('Main');
        }else{
            setMessage("Username atau Password salah")
        }
    };


    return (
        <SafeAreaView style={styles.base}>

            <Image style={styles.logo} source={require('../img/logo.png')} />
            <Text style={styles.headline}>KLBM ACCESS</Text>
            <Text style={styles.sub_headline}>Internal Application Procedure</Text>

            <View style={styles.box}>
                <TextInput 
                    style={styles.text_input} 
                    placeholder="Username"
                    value={username} onChangeText={(value) => setUsername(value)}
                />
                <TextInput 
                    style={styles.text_input} 
                    placeholder="Password" 
                    secureTextEntry={true}
                    value={password} onChangeText={(value) => setPassword(value)}
                />

                <TouchableOpacity 
                    style={styles.button_primary}
                    onPress={check}
                >
                    <Text style={styles.label_primary}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.warning}>{message}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    base: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
    },

    logo: {
        height: 100,
        width: 100,
        marginRight: 12
    },

    headline: {
        fontSize: 28,
        color: '#1F487E',
        fontWeight: 'bold'
    },

    sub_headline: {
        fontSize: 14,
        color: '#1F487E',
    },

    box: {
        marginTop: 36,
        borderRadius: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text_input: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 260,
        marginVertical: 8,
        padding: 12,
        color: '#1F487E',
    },

    button_primary: {
        backgroundColor: '#1F487E',
        borderRadius: 20,
        width: 260,
        marginVertical: 18,
        padding: 12,
        alignItems: 'center'
    },

    label_primary: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },

    warning: {
        color: 'red',
        fontSize: 12
    }
});