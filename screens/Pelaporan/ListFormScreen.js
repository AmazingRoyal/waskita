import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

export default function ListFormScreen({navigation}) {
    return(
        <SafeAreaView style={styles.base}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('List Form MCS')}}
            >
                <Text style={styles.button_text}>Mobile Customer Service</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('List Form CS')}}
            >
                <Text style={styles.button_text}>Customer Service</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('List Form TIC')}}
            >
                <Text style={styles.button_text}>Traffic Information Center</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('List Form Ambulance')}}
            >
                <Text style={styles.button_text}>Ambulance</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('List Form Rescue')}}
            >
                <Text style={styles.button_text}>Rescue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#1F487E',
        width: '80%',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical:24,
        marginVertical: 12,
        borderRadius: 20 
    },

    button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }
})