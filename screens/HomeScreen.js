import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'

import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const DATA = [
    {
        id: '1',
        tipe: 'Kerusakan',
        objek: 'Expansion Joint',
        lokasi: 'KM 24.200 A',
        gambar: 'https://ernimulyandari.files.wordpress.com/2011/05/img01319-20100322-1646.jpg'
    },
    {
        id: '2',
        tipe: 'Kerusakan',
        objek: 'Canstein',
        lokasi: 'Akses Belahan Rejo',
        gambar: 'https://dpu.kulonprogokab.go.id/files/news/normal/RUSAK_LUBANG.jpg'
    },
    {
        id: '3',
        tipe: 'Kecelakaan',
        objek: '3-3',
        lokasi: 'KM 14.500 B',
        gambar: 'https://www.seva.id/wp-content/uploads/2021/11/shutterstock_519241105-1-1-e1636618519572.jpg'
    },
];

const DATA_SHIFT = [
    {
        id: '1',
        tanggal: '1',
        periode: '1',
    },
    {
        id: '2',
        tanggal: '2',
        periode: '2',
    },
    {
        id: '3',
        tanggal: '3',
        periode: '3',
    },
    {
        id: '4',
        tanggal: '4',
        periode: 'Off',
    },
    {
        id: '5',
        tanggal: '5',
        periode: 'Off',
    },
    {
        id: '6',
        tanggal: '6',
        periode: '1',
    },
    {
        id: '7',
        tanggal: '7',
        periode: '2',
    },
    {
        id: '8',
        tanggal: '8',
        periode: '3',
    },
    {
        id: '9',
        tanggal: '9',
        periode: 'Off',
    },
    {
        id: '10',
        tanggal: '10',
        periode: 'Off',
    },
]

export default function HomeScreen({route, navigation}) {
    return (
        <SafeAreaView style={styles.base}>
            <ScrollView>

                {/* PROFILE */}
                <TouchableOpacity 
                    style={styles.profile}
                    onPress={() => {navigation.navigate('Profil')}}
                >
                    <View style={styles.profile_img_container}>
                        <Image style={styles.profile_img} source={require('../img/profile.png')} />
                    </View>
                    <View style={styles.profile_decs}>
                        <Text style={styles.profile_nama}>Alfian Cahy Surono</Text>
                        <Text style={styles.profile_text}>Mobile Costumer Service</Text>
                        <Text style={styles.profile_text}>7 Desember 2021</Text>
                    </View>
                </TouchableOpacity>

                {/* SHIFT */}
                <View style={styles.shift}>
                    <View style={styles.shift_kiri}>
                        <Text style={styles.headline}>Shift 2</Text>
                        <View style={styles.space}/>
                        <Text style={styles.sub_headline}>Periode</Text>
                        <Text style={styles.shift_jam}>14.00 - 21.00</Text>
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
                    <View style={styles.maps}>
                        <Text style={styles.sub_headline_dark}>
                            <MaterialIcons name="location-on" size={14} color="#829CBC" /> Posisi
                        </Text>
                        <View style={styles.maps_img_container}>
                            <Image style={styles.maps_img} source={require('../img/posisi.png')} />
                        </View>
                    </View>
                </View>

                {/* KALENDER */}
                <View style={styles.calendar}>
                    <Text style={styles.headline_dark}>Kalender</Text>
                    <Text style={styles.sub_headline_dark}>Desember 2021</Text>
                    <FlatList
                        data={DATA_SHIFT}
                        keyExtractor={item_calendar => item_calendar.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=> (
                            <>
                                <TouchableOpacity 
                                    style={styles.item_calendar}
                                    onPress={() => {navigation.navigate('Kalender')}}
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
                                <View style={styles.item}>
                                    <View style={styles.item_img_container}>
                                        <Image style={styles.item_img} source={{uri: item.gambar}} />
                                    </View>
                                    <View style={styles.item_desc}>
                                        <Text style={styles.item_headline}>{item.tipe}</Text>
                                        <Text style={styles.item_sub_headline}>{item.objek}</Text>
                                        <Text style={styles.item_sub_headline}>{item.lokasi}</Text>
                                    </View>
                                </View>
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
        // backgroundColor: '#1F487E',
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
        width: 54,
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
        width: 52,
        height: 80,
        marginBottom: 20,
    },

    calendar_box_off: {
        backgroundColor: '#829cbc',
        borderRadius: 100,
        padding: 8,
        alignItems: 'center',
        justifyContent: "center",
        width: 52,
        height: 80,
        marginBottom: 10,
        marginTop: 10
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