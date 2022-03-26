import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const KalenderScreen = ({ navigation}) => {

    // const DATA = require('../metadata/periode.json')

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
    const [lastTime, setLastTime] = useState(curTime);
    const [difTime, setDiffTime] = useState(diff(curTime, "05:00"));
    const [periode, setPeriode] = useState('');
    const [waktuAwal, setWaktuAwal] = useState('06:00');
    const [waktuAkhir, setWaktuAkhir] = useState('14:00');
    const [percentage, setPercentage] = useState(getPercentage(curTime, waktuAkhir))

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

    function diff(start, end) {
        start = start.split(":");
        end = end.split(":");
        var day = 0;

        if (start >= 22 && start < 24){
            day = 1;
        }

        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, day, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);

        if (hours < 0)
            hours = hours + 24;

        return hours + " jam " + minutes + " menit";
    }

    function getPercentage(start, end) {
        start = start.split(":");
        end = end.split(":");
        var day = 0;

        if (start >= 22 && start < 24){
            day = 1;
        }

        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, day, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var estimated = 28800000 - diff
        console.log("diff:", diff)
        console.log("estimated:", estimated)
        console.log(day, start, end)
        
        var result = Math.round(estimated / 28800000 * 100)
        result = result+"%";
        console.log(result)
        
        return result
    }

    useEffect( () => {
        setInterval(() => {
            if (getTime() != curTime){
                setCurTime(getTime())
            }
        }, 1500)
    })

    useEffect( () => {
        setShift(curTime)
        setPercentage(getPercentage(curTime, waktuAkhir))
    }, [])

    useEffect( () => {
        if (curTime != lastTime){
            setLastTime(curTime)
            setDiffTime(diff(curTime, waktuAkhir));
            setPercentage(getPercentage(curTime, waktuAkhir))
            setShift(curTime)
            // clearInterval(s)
        }
    }, [curTime])


    return (
        <SafeAreaView style={styles.based}>
            <View style={styles.base}>
                {/* Periode */}
                <View style={styles.periode}>
                    <View style={styles.box}>
                        <Text style={styles.periode_text}>{periode}</Text>
                    </View>
                    <Text style={styles.sub_headline}>Waktu Shift</Text>
                    <Text style={styles.detail}>{waktuAwal} - {waktuAkhir}</Text>
                    <Text style={styles.sub_headline}>Tanggal</Text>
                    <Text style={styles.detail}>{tanggal}</Text>
                </View>
            </View>

            <View style={styles.base}>
                <View style={styles.estimasi}>
                    <Text style={styles.sub_headline}>Estimasi</Text>
                    <View>
                        <Text style={styles.estimasi_detail_top}>{difTime}</Text>
                    </View>
                    <View style={styles.chart}>
                        <View style={[styles.time_position, {left:percentage}]}></View>
                        <View style={[styles.presensi_bar_front, {width:percentage}]}></View>
                        <View style={styles.presensi_bar_back}></View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.estimasi_detail}>{waktuAwal}</Text>
                        <Text style={styles.estimasi_detail}>{waktuAkhir}</Text>
                    </View>

                </View>
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
        </SafeAreaView>
    );
}

export default KalenderScreen

const styles = StyleSheet.create({
    base: {
        // flex:1,
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 12,
        marginVertical: 6,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    
    based: {
        marginTop: 6
    },

    box: {
        borderRadius: 50,
        // borderWidth: 2,
        paddingHorizontal: 18,
        paddingVertical: 5,
        marginVertical: 5,
        // borderColor: "#1F487E",
        alignSelf: 'center'
    },

    periode: {
        alignItems: "flex-start",
    },

    periode_text: {
        fontSize: 24,
        color: '#1F487E',
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
        color: '#1F487E',
        fontWeight: 'bold',
        marginBottom: 12
    },

    estimasi_detail_top: {
        fontSize: 20,
        color: '#BABEC3',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    estimasi_detail: {
        fontSize: 14,
        color: '#1F487E',
        marginBottom: 4,
    },

    estimasi: {
        justifyContent: 'center',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    time_position: {
        backgroundColor: '#1F487E',
        height: 16,
        width: 16,
        borderRadius: 50,
        justifyContent: 'flex-end',
        position: 'relative',
        top: 10.5,
        bottom: 0,
        zIndex: 4,
        elevation: 4,
        marginLeft: -9
    },

    presensi_bar_front: {
        backgroundColor: '#1F487E',
        height: 6,
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
        height: 5,
        borderRadius: 50,
        position: 'relative',
        top: -6,
        bottom: 0
    },

    actionContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%",
    },

    buttonPrimary: {
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "#1F487E",
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
        borderColor: "#1F487E",
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