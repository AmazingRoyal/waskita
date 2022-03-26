import React, {useState} from 'react'
import {View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function StatusScreen({navigation}) {

    const DATA = require('../metadata/kerusakan.json')

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.base}>
                        {/* <View style={styles.item_img_container}>
                            <Image style={styles.item_img} source={{uri: DATA[noData].gambar}} />
                        </View>
                    <View style={styles.data}>
                        <Text style={styles.sub_headline}>Tanggal Lapor</Text>
                        <Text style={styles.detail}>{DATA[noData].tanggal}</Text>
                        <Text style={styles.sub_headline}>Jenis Aset</Text>
                        <Text style={styles.detail}>{DATA[noData].objek}</Text>
                        <Text style={styles.sub_headline}>STA/Kilometer</Text>
                        <Text style={styles.detail}>{DATA[noData].lokasi}</Text>
                        <Text style={styles.sub_headline}>Kondisi</Text>
                        <Text style={styles.detail}>{DATA[noData].kondisi}</Text>
                        <Text style={styles.sub_headline}>Rincian</Text>
                        <View style={styles.rincian_box}>
                            <Text style={styles.text}>{DATA[noData].rincian}</Text>
                        </View>

                        <Text style={styles.sub_headline}>Status Penanganan</Text>
                        <Text style={styles.detail}>{DATA[noData].status}</Text>

                        <View style={styles.space} />
                        
                        <Text style={styles.update_headline}>Update</Text>
                        <Text style={styles.update}>{DATA[noData].update}</Text>
                    </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    base: {
        backgroundColor: 'white',
        paddingBottom: 12,
    },

    data: {
        padding: 12,
    },

    update: {
        fontSize: 14,
        color: 'black',
        alignSelf: 'center'
    },

    update_headline: {
        fontSize: 14,
        color: '#BABEC3',
        marginTop: 8,
        alignSelf: 'center'
    },

    sub_headline: {
        fontSize: 14,
        color: '#c4c4c4',
        marginTop: 8
    },

    detail: {
        fontSize: 20,
        color: '#1F487E',
        fontWeight: 'bold',
        marginBottom: 8
    },

    item_img_container: {
        height: 200,
        width: "100%",
        overflow: "hidden",
        alignSelf:"center",
        // borderRadius: 15,
        marginBottom: 8,
    },

    item_img: {
        height: 200,
        width: "100%",
        alignSelf: 'center'
        // borderRadius: 15
    },

    rincian_box: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        padding: 8,
        borderRadius: 15,
        marginBottom: 8,
        marginTop: 8
    },

    text: {
        fontSize: 14,
    },

    space: {
        marginTop: 24,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "#BABEC3",
        marginHorizontal: 12
    },
});