import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'

import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function KalenderScreen({navigation}) {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    if (month == 1){
        month = 'Januari';
    }else if (month == 2){
        month = 'Februari';
    }else if (month == 3){
        month = 'Maret';
    }else if (month == 4){
        month = 'April';
    }else if (month == 5){
        month = 'Mei';
    }else if (month == 6){
        month = 'Juni';
    }else if (month == 11){
        month = 'Juli';
    }else if (month == 7){
        month = 'Agustus';
    }else if (month == 8){
        month = 'September';
    }else if (month == 9){
        month = 'Oktober';
    }else if (month == 10){
        month = 'November';
    }else{
        month = 'Desember';
    }
    const tanggal = date + " " + month + ' ' + year;
    
    return (
        <SafeAreaView style={styles.base}>
            <ScrollView>

                {/* Periode */}
                <View style={styles.periode}>
                    <View style={styles.box}>
                        <Text style={styles.periode_text}>Periode 3</Text>
                    </View>
                    <Text style={styles.sub_headline}>Waktu Shift</Text>
                    <Text style={styles.detail}>21.00 - 05.00</Text>
                    <Text style={styles.sub_headline}>Tanggal</Text>
                    <Text style={styles.detail}>{tanggal}</Text>
                </View>
        
                <View style={styles.actionContainer}>
                    <TouchableOpacity 
                        style={styles.buttonPrimary}
                        onPress={() => {navigation.navigate('Permohonan')}}
                    >
                        <MaterialIcons name="published-with-changes" size={24} color="#1F487E" />
                        <Text style={[styles.labelPrimary, {marginLeft:4}]}>Tukar Shift</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonSecondary}
                        onPress={() => {navigation.navigate('Permohonan')}}
                    >
                        <FontAwesome5 name="calendar-check" size={24} color="white" />
                        <Text style={[styles.labelSecondary, {marginLeft:4}]}>Tukar Libur</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: '#1F487E',
    },

    box: {
        borderRadius: 50,
        borderWidth: 2,
        paddingHorizontal: 18,
        paddingVertical: 5,
        marginVertical: 5,
        borderColor: "white",
    },

    periode: {
        alignItems: "flex-start",
        margin: 12,
    },

    periode_text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },

    headline: {
        fontSize: 24,
        color: '#1F487E',
        fontWeight: 'bold',
        marginVertical: 18
    },

    sub_headline: {
        fontSize: 14,
        color: '#BABEC3',
        marginTop: 18
    },

    detail: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 12
    },

    actionContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%",
        marginBottom: "12%",
    },

    buttonPrimary: {
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "white",
        paddingHorizontal: 18,
        paddingVertical: 4,
        marginHorizontal: 5,
        width: "35%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    buttonSecondary: {
        backgroundColor: "#1F487E",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "white",
        paddingHorizontal: 18,
        paddingVertical: 4,
        marginHorizontal: 5,
        width: "35%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    labelPrimary: {
        color: "#1F487E",
        fontSize: 16,
        fontWeight: "bold"
    },
    labelSecondary: {
        color: "white",
        fontSize: 16,
    },

});