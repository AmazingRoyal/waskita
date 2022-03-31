import React, {useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Switch, ScrollView} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FormSTTRescueScreen({navigation}) {

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

    const [benderaMerah, setBenderaMerah] = useState(false);
    const [jasHujan, setJasHujan] = useState(false);
    const [sarungTangan, setSarungTangan] = useState(false);
    const [sepatuBoot, setSepatuBoot] = useState(false);
    const [handyTalky, setHandyTalky] = useState(false);

    const [rubberCone, setRubberCone] = useState(false);
    const [balokKayu, setBalokKayu] = useState(false);
    const [apar9Kg, setApar9Kg] = useState(false);
    const [lampuSenter, setLampuSenter] = useState(false);
    const [corongPlastik, setCorongPlastik] = useState(false);
    const [jerigen20Lt, setJerigen20Lt] = useState(false);

    const [STNK, setSTNK] = useState(false);
    const [bukuUjiKIR, setBukuUjiKIR] = useState(false);

    const toggleBenderaMerah = () => setBenderaMerah(previousState => !previousState);
    const toggleJasHujan = () => setJasHujan(previousState => !previousState);
    const toggleSarungTangan = () => setSarungTangan(previousState => !previousState);
    const toggleSepatuBoot = () => setSepatuBoot(previousState => !previousState);
    const toggleHandyTalky = () => setHandyTalky(previousState => !previousState);
    
    const toggleRubberCone = () => setRubberCone(previousState => !previousState);
    const toggleBalokKayu = () => setBalokKayu(previousState => !previousState);
    const toggleApar9Kg = () => setApar9Kg(previousState => !previousState);
    const toggleLampuSenter = () => setLampuSenter(previousState => !previousState);
    const toggleCorongPlastik = () => setCorongPlastik(previousState => !previousState);
    const toggleJerigen20Lt = () => setJerigen20Lt(previousState => !previousState);
    
    const toggleSTNK = () => setSTNK(previousState => !previousState);
    const toggleBukuUjiKIR = () => setBukuUjiKIR(previousState => !previousState);

    return(
        <SafeAreaView >
            <ScrollView>
                <View style={styles.base}>

                    <Text style={styles.headline}>Form Serah Terima Kendaraan dan Sarana</Text>
                    <Text style={styles.tanggal}>{tanggal}</Text>
                    <View style={styles.form}>

                        <Text style={styles.subtitle}>A. Perlengkapan Petugas</Text>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Bendera Merah</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={benderaMerah ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleBenderaMerah}
                                value={benderaMerah}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jas Hujan</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={jasHujan ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleJasHujan}
                                value={jasHujan}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Sarung Tangan</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={sarungTangan ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSarungTangan}
                                value={sarungTangan}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Sepatu Boot</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={sepatuBoot ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSepatuBoot}
                                value={sepatuBoot}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Handy Talky</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={handyTalky ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleHandyTalky}
                                value={handyTalky}
                            />
                        </View>

                        <Text style={styles.subtitle}>B. Pelengkapan Sarana Tugas</Text>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Rubber Cone</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={rubberCone ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleRubberCone}
                                value={rubberCone}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Balok Kayu</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={balokKayu ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleBalokKayu}
                                value={balokKayu}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>APAR 9Kg</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={apar9Kg ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleApar9Kg}
                                value={apar9Kg}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Lampu Senter</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={lampuSenter ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleLampuSenter}
                                value={lampuSenter}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Corong Plastik</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={corongPlastik ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleCorongPlastik}
                                value={corongPlastik}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jerigen 20Lt</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={corongPlastik ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleJerigen20Lt}
                                value={jerigen20Lt}
                            />
                        </View>

                        <Text style={styles.subtitle}>C. Pelengkapan Kendaraan</Text>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>STNK</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={corongPlastik ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSTNK}
                                value={STNK}
                            />
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Buku Uji KIR</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={corongPlastik ? "#ff7d00" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleBukuUjiKIR}
                                value={bukuUjiKIR}
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