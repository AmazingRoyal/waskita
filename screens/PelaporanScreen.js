import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'

const DATA_KERUSAKAN = [
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
        tipe: 'Kerusakan',
        objek: 'Expansion Joint',
        lokasi: 'KM 24.200 A',
        gambar: 'https://ernimulyandari.files.wordpress.com/2011/05/img01319-20100322-1646.jpg'
    },
    {
        id: '4',
        tipe: 'Kerusakan',
        objek: 'Expansion Joint',
        lokasi: 'KM 24.200 A',
        gambar: 'https://ernimulyandari.files.wordpress.com/2011/05/img01319-20100322-1646.jpg'
    },
    {
        id: '5',
        tipe: 'Kerusakan',
        objek: 'Canstein',
        lokasi: 'Akses Belahan Rejo',
        gambar: 'https://dpu.kulonprogokab.go.id/files/news/normal/RUSAK_LUBANG.jpg'
    },
    {
        id: '6',
        tipe: 'Kerusakan',
        objek: 'Expansion Joint',
        lokasi: 'KM 24.200 A',
        gambar: 'https://ernimulyandari.files.wordpress.com/2011/05/img01319-20100322-1646.jpg'
    },
    {
        id: '7',
        tipe: 'Kerusakan',
        objek: 'Expansion Joint',
        lokasi: 'KM 24.200 A',
        gambar: 'https://ernimulyandari.files.wordpress.com/2011/05/img01319-20100322-1646.jpg'
    },
    {
        id: '8',
        tipe: 'Kerusakan',
        objek: 'Canstein',
        lokasi: 'Akses Belahan Rejo',
        gambar: 'https://dpu.kulonprogokab.go.id/files/news/normal/RUSAK_LUBANG.jpg'
    },
    {
        id: '9',
        tipe: 'Kerusakan',
        objek: 'Expansion Joint',
        lokasi: 'KM 24.200 A',
        gambar: 'https://ernimulyandari.files.wordpress.com/2011/05/img01319-20100322-1646.jpg'
    },
];

const DATA_KECELAKAAN = [
    {
        id: '1',
        tipe: '3-3',
        objek: 'Laka Tunggal',
        lokasi: 'KM 24.200 A',
        gambar: 'https://www.seva.id/wp-content/uploads/2021/11/shutterstock_519241105-1-1-e1636618519572.jpg'
    },
    {
        id: '2',
        tipe: '3-3 MD',
        objek: 'Laka MD',
        lokasi: 'Akses Belahan Rejo',
        gambar: 'https://www.seva.id/wp-content/uploads/2021/11/shutterstock_519241105-1-1-e1636618519572.jpg'
    },
    {
        id: '3',
        tipe: '3-3',
        objek: 'Tabrak Belakang',
        lokasi: 'KM 14.500 B',
        gambar: 'https://www.seva.id/wp-content/uploads/2021/11/shutterstock_519241105-1-1-e1636618519572.jpg'
    },
    {
        id: '4',
        tipe: '3-3 MD',
        objek: 'Laka MD',
        lokasi: 'KM 24.200 A',
        gambar: 'https://www.seva.id/wp-content/uploads/2021/11/shutterstock_519241105-1-1-e1636618519572.jpg'
    }
];

export default function PelaporanScreen() {
    const [dataList, setDataList] = useState([]);
    const [menuActive, setMenuActive] = useState("kerusakan");
    
    useEffect(() => {
        menuActive == 'kerusakan' ? setDataList(DATA_KERUSAKAN) : setDataList(DATA_KECELAKAAN)
    })

    return (
        <SafeAreaView >
            <View style={styles.menu}>
                <TouchableOpacity 
                    style={menuActive == 'kerusakan' ? styles.menu_item_dark : styles.menu_item} 
                    onPress={() => {setMenuActive("kerusakan") }}
                >
                    <Text style={{
                        color: menuActive == "kerusakan" ? "white" : "#1F487E",
                        fontWeight: menuActive == "kerusakan" ? "bold" : "100",
                        fontSize: 14
                    }}>
                        Kerusakan & Kehilangan
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={menuActive == 'kecelakaan' ? styles.menu_item_dark : styles.menu_item} 
                    onPress={() => {setMenuActive("kecelakaan") }}
                >
                    <Text style={{
                        color: menuActive == "kecelakaan" ? "white" : "#1F487E",
                        fontWeight: menuActive == "kecelakaan" ? "bold" : "100",
                        fontSize: 14
                    }}>
                        Kecelakaan
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.base}>
                <FlatList
                    data={dataList}
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
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    base: {
        paddingHorizontal: 12,
        marginBottom: 64
    },

    headline_dark: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#1F487E',
        marginBottom: 12,
        marginTop: 12
    },

    item: {
        backgroundColor: '#1F487E',
        borderRadius: 20,
        marginVertical: 4,
        flexDirection: 'row',
        alignSelf: 'stretch',
        
    },

    item_img_container: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        overflow: "hidden",
        alignSelf:"center",
        marginRight: 12
    },

    item_img: {
        height: 100,
        width: 100,
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

    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 12
    },

    menu_item_dark: {
        backgroundColor: '#1F487E',
        marginHorizontal: 12,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderWidth: 2,
        borderColor: "#1F487E",
    },

    menu_item: {
        backgroundColor: 'white',
        marginHorizontal: 12,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderWidth: 2,
        borderColor: "#1F487E",
    }
});