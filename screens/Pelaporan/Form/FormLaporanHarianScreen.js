import React, {useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {Picker} from '@react-native-picker/picker';
// import * as ImagePicker from 'react-native-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FormLaporanHarianScreen({navigation}) {

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

    return(
        <SafeAreaView >
            <ScrollView>
                <View style={styles.base}>

                    <Text style={styles.headline}>Form Laporan Harian</Text>
                    <Text style={styles.tanggal}>{tanggal}</Text>
                    <View style={styles.form}>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Pukul</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>STA/Kilometer</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kegiatan</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Keterangan</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom_side}>
                    <TouchableOpacity 
                        style={styles.buttonPrimary}
                        onPress={() => {navigation.navigate('Laporan')}}
                    >
                        <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />
                        <Text style={[styles.labelPrimary, {marginLeft:4}]}> Laporkan</Text>
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

    space: {
        marginBottom: 24,
        borderBottomWidth: 0.8,
        borderColor: "#BABEC3",
        marginHorizontal: 12
    },

    headline: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    tanggal: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 18
    },

    form: {
        flexDirection: 'column',
        padding: 12,
        marginBottom: 12,
    },

    form_label: {
        color: 'white',
        fontSize: 16,
        width: '40%',
        // fontWeight: 'bold'
    },

    form_input: {
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text_input: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical:2
    },

    picker: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        height: 20
    },

    form_text: {
        width: '75%',
        fontSize: 16,
        paddingHorizontal: 12,
        color: 'white',
    },

    bottom_side: {
        paddingVertical: 36
    },

    buttonPrimary: {
        backgroundColor: "#1F487E",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "#1F487E",
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginHorizontal: 5,
        width: "70%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    labelPrimary: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },

    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center'
    },
    images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
    },
    btnParentSection: {
        alignItems: 'center',
        marginTop:10
    },
    btnSection: {
        width: 225,
        height: 50,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom:10
    },
    btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight:'bold'
    }
});