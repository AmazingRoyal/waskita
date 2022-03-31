import React, {useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Switch, ScrollView} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FormSTTCSScreen({navigation}) {

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

    // Deklarasi State
    const [ruangSPV, setRuangSPV] = useState(false);
    const [garduCR, setGarduCR] = useState(false);
    const [kamarMandi, setKamarMandi] = useState(false);

    const [kursi, setKursi] = useState(false);
    const [meja, setMeja] = useState(false);
    
    // Fungsi ToggleSwitch
    const toggleRuangSPV = () => setRuangSPV(previousState => !previousState);
    const toggleGarduCR = () => setGarduCR(previousState => !previousState);
    const toggleKamarMandi = () => setKamarMandi(previousState => !previousState);

    const toggleKursi = () => setKursi(previousState => !previousState);
    const toggleMeja = () => setMeja(previousState => !previousState);

    return(
        <SafeAreaView >
            <ScrollView>
                <View style={styles.base}>

                    <Text style={styles.headline}>Form Serah Terima Tugas dan Sarana Customer Service</Text>
                    <Text style={styles.tanggal}>{tanggal}</Text>
                    <View style={styles.form}>

                        <Text style={styles.subtitle}>A. Kondisi Kebersihan</Text>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Ruang SPV</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={ruangSPV ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleRuangSPV}
                                value={ruangSPV}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Gardu CR</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={garduCR ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleGarduCR}
                                value={garduCR}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kamar Mandi</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={kamarMandi ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleKamarMandi}
                                value={kamarMandi}
                            />
                        </View>

                        <Text style={styles.subtitle}>B. Kondisi Sarana Kerja</Text>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kursi</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={kursi ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleKursi}
                                value={kursi}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Meja</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={meja ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleMeja}
                                value={meja}
                            />
                        </View>
                        
                    </View>

                    <View style={styles.space} />
                        
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
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 24,
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text_input: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        // paddingVertical:2
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

    picker: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        height: 20
    },

});