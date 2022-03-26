import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const DATA = require('../metadata/pelaporan.json')
const DATA_PROFIL = require('../metadata/akun.json')
const DATA_SHIFT = require('../metadata/periode.json')

export default function HomeScreen({navigation}) {

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
    
    const [curTime, setCurTime] = useState(getTime());
    const [waktuAwal, setWaktuAwal] = useState('06:00');
    const [waktuAkhir, setWaktuAkhir] = useState('14:00');
    const [periode, setPeriode] = useState('');

    function getTime() {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        
        return (hours+":"+minutes);
    }

    function setShift(time) {
        time = time.split(":")
        if (time[0] >= 6 && time[0] < 14){
            setPeriode('Periode 1');
            setWaktuAwal('06:00')
            setWaktuAkhir('14:00')
        }else if (time[0] >= 14 && time[0] < 22){
            setPeriode('Periode 2');
            setWaktuAwal('14:00')
            setWaktuAkhir('22:00')
        }else {
            setPeriode('Periode 3')
            setWaktuAwal('22:00')
            setWaktuAkhir('06:00')
        }
    }

    useEffect( () => {
        setCurTime(getTime())
        setShift(curTime)
    }, [])

    return (
        <SafeAreaView style={styles.base}>
            <ScrollView>

                {/* PROFILE */}
                <TouchableOpacity 
                    style={styles.profile}
                    onPress={() => {navigation.navigate('Profil')}}
                >
                    <View style={styles.profile_img_container}>
                    <Image style={styles.profile_img} source={require("../img/profile.png")} />
                    </View>
                    <View style={styles.profile_decs}>
                        <Text style={styles.profile_nama}>{DATA_PROFIL[0].nama}</Text>
                        <Text style={styles.profile_text}>{DATA_PROFIL[0].jabatan}</Text>
                        <Text style={styles.profile_text}>{tanggal}</Text>
                    </View>
                </TouchableOpacity>

                {/* SHIFT */}
                <View style={styles.shift}>
                    <View style={styles.shift_kiri}>
                        <Text style={styles.headline}>{periode}</Text>
                        <View style={styles.space}/>
                        <Text style={styles.sub_headline}>Waktu</Text>
                        <Text style={styles.shift_jam}>{waktuAwal} - {waktuAkhir}</Text>
                    </View>
                    <View style={styles.shift_kanan}>
                        <Text style={styles.shift_nomor}> 211</Text>
                    </View>
                </View>

                {/* STATUS */}
                <View style={styles.status}>
                    <View style={styles.presensi}>
                        <Text style={styles.sub_headline_dark}>
                            <FontAwesome5 name="chart-line" size={14} color="#829CBC" /> Presensi
                        </Text>
                        <Text style={styles.presensi_angka}>70%</Text>
                        <View style={styles.presensi_bar_front}></View>
                        <View style={styles.presensi_bar_back}></View>
                    </View>
                    <TouchableOpacity 
                        style={styles.maps}
                        onPress={() => {navigation.navigate('Status')}}
                    >
                        {/* <View style={styles.maps}> */}
                            <Text style={styles.sub_headline_dark}>
                                <MaterialIcons name="location-on" size={14} color="#829CBC" /> Posisi
                            </Text>
                            <View style={styles.maps_img_container}>
                                <Image style={styles.maps_img} source={require('../img/posisi.png')} />
                            </View>
                        {/* </View> */}
                    </TouchableOpacity>
                </View>

                {/* KALENDER */}
                <View style={styles.calendar}>
                    <Text style={styles.headline_dark}>Kalender</Text>
                    <Text style={styles.sub_headline_dark}>{month + ' ' + year}</Text>
                    <FlatList
                        data={DATA_SHIFT}
                        keyExtractor={item_calendar => item_calendar.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=> (
                            <>
                                <TouchableOpacity 
                                    style={styles.item_calendar}
                                    onPress={() => {navigation.navigate('Kalender', {kalender_id: item.periode}) }}
                                >
                                    <View style={item.periode=="Off" ? styles.calendar_box_off : styles.calendar_box_on}>
                                        <Text style={item.periode=="Off" ? styles.calendar_periode_off : styles.calendar_periode_on}>{item.periode}</Text>
                                    </View>
                                    <Text style={styles.item_calendar_tanggal}>{item.tanggal}</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    />
                    <Text style={styles.calendar_tanggal}>Tanggal</Text>
                </View>

                {/* TIMELINE */}
                <View style={styles.timeline}>
                    <Text style={styles.headline_dark}>Timeline</Text>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <>
                                <TouchableOpacity 
                                    style={styles.item}
                                    onPress={() => {navigation.navigate('Pelaporan')}}
                                >
                                    <View style={styles.item_img_container}>
                                        <Image style={styles.item_img} source={{uri: item.gambar}} />
                                    </View>
                                    <View style={styles.item_desc}>
                                        <Text style={styles.item_headline}>{item.tipe}</Text>
                                        <Text style={styles.item_sub_headline}>{item.objek}</Text>
                                        <Text style={styles.item_sub_headline}>{item.lokasi}</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    base: {
        paddingTop: 64
    },

    space: {
        height: 18,
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F487E',
        textAlign: 'center',
        marginVertical: 12
    },

    profile: {
        flexDirection: 'row',
        alignItems: "center",
        margin: 12,
        paddingHorizontal: 8,
        paddingTop: 12
    },

    profile_img_container: {
        height: 80,
        width: 80,
        borderRadius: 50,
        overflow: "hidden",
        marginRight: 18,
        alignItems: 'flex-start',
        justifyContent:'center'
    },

    profile_img: {
        height: 80,
        width: 80,
        borderRadius:50,
        justifyContent: 'center',
    },

    profile_desc: {
        flexDirection: 'column',
        justifyContent:'center'
    },

    profile_nama: {
        color:'#1F487E',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },

    profile_text: {
        color:'#829CBC',
        justifyContent: 'center',
    },

    shift: {
        backgroundColor: '#1F487E',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20,
        padding: 12,
        margin: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },

    shift_kiri: {
        flexDirection: 'column',
    },

    shift_kanan: {
        flexDirection: 'column',
    },

    headline: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
    },

    headline_dark: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#1F487E',
    },

    sub_headline: {
        fontSize: 14,
        color:'white',
    },

    sub_headline_dark: {
        fontSize: 14,
        color:'#829CBC',
    },

    shift_jam: {
        fontSize: 20,
        color:'white',
        fontWeight: 'bold'
    },

    shift_nomor: {
        fontSize: 56,
        fontWeight: 'bold',
        color:'white',
    },

    status: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "stretch",
        marginHorizontal: 12
    },

    presensi: {
        flex: 1, 
        backgroundColor: 'white',
        flexDirection: 'column',
        alignSelf: "stretch",
        borderRadius: 20,
        padding: 12,
        marginRight: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    presensi_text: {
        color: '#1F487E',
        fontSize: 14,
        fontWeight: 'bold'
    },

    presensi_angka: {
        color: '#1F487E',
        fontWeight: 'bold',
        fontSize: 46,
        
    },

    maps: {
        flex: 1, 
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 12,
        flexDirection: 'column',
        alignSelf: 'stretch',
        marginLeft: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    maps_text: {
        color: 'white',
        fontSize: 14,
    },

    maps_img_container: {
        height: 100,
        width: '100%',
        borderRadius: 20,
        overflow: "hidden",
        alignSelf:"center"
    },

    maps_img: {
        height: 100,
        width: '100%',
        borderRadius:20,
    },

    calendar: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 12,
        margin: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    calendar_text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    calendar_now: {
        color: 'white',
        fontSize: 14,
    },

    timeline: {
        marginHorizontal: 12,
    },

    item: {
        backgroundColor: '#1F487E',
        borderRadius: 20,
        marginVertical: 4,
        flexDirection: 'row',
        alignSelf: 'stretch',
    },

    item_img_container: {
        height: 80,
        width: 80,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        overflow: "hidden",
        alignSelf:"center",
        marginRight: 12
    },

    item_img: {
        height: 80,
        width: 80,
    },

    item_desc: {
        flexDirection: 'column',
        paddingTop: 4
    },

    item_headline:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'white',

    },

    item_sub_headline:{
        fontSize: 14,
        color:'white',
    },

    presensi_bar_front: {
        backgroundColor: '#1F487E',
        height: 10,
        width: '70%',
        borderRadius: 50,
        justifyContent: 'flex-end',
        position: 'relative',
        top: 0,
        bottom: 0,
        zIndex: 3,
        elevation: 3
    },

    presensi_bar_back: {
        backgroundColor: '#BABEC3',
        height: 10,
        borderRadius: 50,
        position: 'relative',
        top: -10,
        bottom: 0
    },

    item_calendar: {
        width: 48,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 4,
        marginBottom: 6
    },

    calendar_box_on: {
        backgroundColor: '#1F487E',
        borderRadius: 100,
        padding: 8,
        alignItems: 'center',
        justifyContent: "center",
        width: 48,
        height: 80,
        marginBottom: 25,
    },

    calendar_box_off: {
        backgroundColor: '#829cbc',
        borderRadius: 100,
        padding: 8,
        alignItems: 'center',
        justifyContent: "center",
        width: 48,
        height: 80,
        marginBottom: 10,
        marginTop: 15
    },

    calendar_periode_on: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    calendar_periode_off: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    item_calendar_tanggal: {
        color: '#1F487E',
    },

    calendar_tanggal: {
        textAlign: 'center',
        fontSize: 14,
        color:'#829CBC',
    }
});