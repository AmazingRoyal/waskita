import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Button, Image, FlatList, ScrollView} from 'react-native'

import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function PermohonanScreen({navigation}) {
  return (
        <SafeAreaView >
            <ScrollView>
                <View style={styles.base}>

                    {/* PIHAK 1 */}
                    <Text style={styles.headline}>Pihak 1</Text>
                    <View style={styles.form}>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>NIK</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Nama</Text>
                            <Text style={styles.form_text}>Alfian Cahyo S.</Text>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jabatan</Text>
                            <Text style={styles.form_text}>Mobile Customer Service</Text>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label_2}>Pada Hari</Text>
                            <TextInput style={styles.text_input_2}/>
                            <Text style={styles.form_label_2}>Periode</Text>
                            <TextInput style={styles.text_input_3}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label_2}>Diganti Hari</Text>
                            <TextInput style={styles.text_input_2}/>
                            <Text style={styles.form_label_2}>Periode</Text>
                            <TextInput style={styles.text_input_3}/>
                        </View>
                    </View>

                    <View style={styles.space} />

                    {/* PIHAK 2 */}
                    <Text style={styles.headline}>Pihak 2</Text>
                    <View style={styles.form}>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>NIK</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Nama</Text>
                            <Text style={styles.form_text}>Alfian Cahyo S.</Text>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jabatan</Text>
                            <Text style={styles.form_text}>Mobile Customer Service</Text>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label_2}>Pada Hari</Text>
                            <TextInput style={styles.text_input_2}/>
                            <Text style={styles.form_label_2}>Periode</Text>
                            <TextInput style={styles.text_input_3}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label_2}>Diganti Hari</Text>
                            <TextInput style={styles.text_input_2}/>
                            <Text style={styles.form_label_2}>Periode</Text>
                            <TextInput style={styles.text_input_3}/>
                        </View>
                    </View>

                    {/* <View style={styles.space} /> */}
                </View>

                <View style={styles.bottom_side}>
                    <TouchableOpacity 
                        style={styles.buttonPrimary}
                        onPress={() => {navigation.navigate('Calendar')}}
                    >
                        <FontAwesome name="send" size={24} color="white" />
                        <Text style={[styles.labelPrimary, {marginLeft:4}]}> Ajukan Permohonan</Text>
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

    form: {
        flexDirection: 'column',
        padding: 12,
        marginBottom: 12,
    },

    form_label: {
        color: 'white',
        fontSize: 16,
        width: '25%',
        fontWeight: 'bold'
    },

    form_label_2: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

    form_input: {
        flexDirection: 'row',
        marginVertical: 6,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text_input: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '75%',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 2
    },

    text_input_2: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '38%',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 2
    },

    text_input_3: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '12%',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 2,
        textAlign: 'center'
    },

    form_text: {
        width: '75%',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 4,
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

});