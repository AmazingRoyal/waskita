import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native'

export default function ProfilScreen() {

    const DATA_PROFIL = require('../metadata/akun.json')

    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../img/logo.png')} />
                <View>
                    <Text style={styles.headline}>KLBM ACCESS</Text>
                    <Text style={styles.sub_headline}>Internal Application Procedure</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.profile_decs}>
                    <Text style={styles.profile_nik}>{DATA_PROFIL[0].nik}</Text>
                    <Text style={styles.profile_nama}>{DATA_PROFIL[0].nama}</Text>
                    <Text style={styles.profile_text}>{DATA_PROFIL[0].jabatan}</Text>
                    <Text style={styles.profile_contract}>Contract till</Text>
                    <Text style={styles.profile_contract_text}>{DATA_PROFIL[0].contract}</Text>
                </View>
                <View style={styles.profile_img_container}>
                    <Image style={styles.profile_img} source={require('../img/profile.png')} />
                    <Text style={styles.img_text}>JMTO</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    base: {
        margin: 12,
        alignItems: 'center'
    },

    header: {
        flexDirection: 'row',
        paddingTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
    },

    logo: {
        height: 100,
        width: 100,
        marginRight: 12
    },

    headline: {
        fontSize: 28,
        color: '#1F487E',
        fontWeight: 'bold'
    },

    sub_headline: {
        fontSize: 14,
        color: '#1F487E',
    },

    box: {
        backgroundColor: '#1F487E',
        flexDirection: 'row',
        borderRadius: 20,
        padding: 18,
        width: '100%',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    profile_decs: {
        justifyContent: 'center'
    },

    profile_nik: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },

    profile_nama: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

    profile_text: {
        color: 'white',
        fontSize: 16,
        marginBottom: 36
    },

    profile_contract: {
        color: 'white',
        fontSize: 14,
    },

    profile_contract_text: {
        color: 'white',
        fontSize: 14,
    },

    img_text: {
        textAlign: "center",
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 6,
        fontSize: 16
    }
});