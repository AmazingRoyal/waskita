import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

export default function ListFormRescueScreen({navigation}) {
    return(
        <SafeAreaView style={styles.base}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('Form STT Rescue')}}
            >
                <Text style={styles.button_text}>Laporan Serah Terima Kendaraan dan Sarana</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {navigation.navigate('Form Laporan Harian')}}
            >
                <Text style={styles.button_text}>Laporan Hasil Tugas</Text>
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