import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

export default function LaporanBaruScreen({navigation}) {
    return(
        <SafeAreaView style={styles.base}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('Form Kerusakan')}}
            >
                <Text style={styles.button_text}>Kerusakan dan Kehilangan</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('Form Kecelakaan')}}
            >
                <Text style={styles.button_text}>Kecelakaan</Text>
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
        marginVertical: 24,
        borderRadius: 20 
    },

    button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }
})