import React, {useEffect, useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'

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
        tipe: 'Kecelakaan',
        objek: '3-3',
        lokasi: 'KM 14.500 B',
        gambar: 'https://www.seva.id/wp-content/uploads/2021/11/shutterstock_519241105-1-1-e1636618519572.jpg'
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
        tipe: 'Kecelakaan',
        objek: '3-3',
        lokasi: 'KM 14.500 B',
        gambar: 'https://www.seva.id/wp-content/uploads/2021/11/shutterstock_519241105-1-1-e1636618519572.jpg'
    },
];

const Item = ({ item }) => (
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
);

export default function PelaporanScreen() {
    const renderItem = ({ item }) => (
        <Item item={item}/>
    );

    return (
        <SafeAreaView >
            <ScrollView style={styles.base}>
                <Text style={styles.headline_dark}>Kerusakan dan Kehilangan</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    base: {
        paddingHorizontal: 12,
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
    }
});