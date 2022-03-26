import React, {useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {Picker} from '@react-native-picker/picker';
// import * as ImagePicker from 'react-native-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FormKerusakanScreen({navigation}) {
        
    // const [filePath, setFilePath] = useState(
    //     {
    //         data: '',
    //         uri: ''
    //     })
    // const [fileData, setFileData] = useState('');
    // const [fileUri, setFileUri] = useState('');

    // chooseImage = () => {
    //     let options = {
    //         title: 'Select Image',
    //         customButtons: [
    //             { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    //         ],
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',
    //         },
    //     };
        
    //     ImagePicker.launchImageLibrary(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //             alert(response.customButton);
    //         } else {
    //             const source = { uri: response.uri };

    //             // You can also display the image using data:
    //             // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //             // alert(JSON.stringify(response));s
    //             console.log('response', JSON.stringify(response));

    //             setFilePath(response);
    //             setFileData(response.data);
    //             setFileUri(response.uri);
    //          }
    //     });
    // }

    // launchCamera = () => {
    //     let options = {
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',
    //         },
    //     };

    //     ImagePicker.launchCamera(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //             alert(response.customButton);
    //         } else {
    //             const source = { uri: response.uri };
    //             console.log('response', JSON.stringify(response));
            
    //             setFilePath(response);
    //             setFileData(response.data);
    //             setFileUri(response.uri);
    //         }
    //     });
    // }

    // launchImageLibrary = () => {
    //     let options = {
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',
    //         },
    //     };
        
    //     ImagePicker.launchImageLibrary(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //             alert(response.customButton);
    //         } else {
    //             const source = { uri: response.uri };
    //             console.log('response', JSON.stringify(response));
                
    //             setFilePath(response);
    //             setFileData(response.data);
    //             setFileUri(response.uri);
    //         }
    //     });

    // }

    // function renderFileData() {
    //     if (fileData) {
    //         return <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }}
    //             style={styles.images}
    //         />
    //     } else {
    //         return <Image source={require('../img/dummy.jpeg')}
    //             style={styles.images}
    //         />
    //     }
    // }

    // function renderFileUri() {
    //     if (fileUri) {
    //     return <Image
    //         source={{ uri: fileUri }}
    //         style={styles.images}
    //     />
    //     } else {
    //     return <Image
    //         source={require('../img/dummy.jpeg')}
    //         style={styles.images}
    //     />
    //     }
    // }

    const [selectedJalur, setSelectedJalur] = useState("");
    const [selectedKondisi, setSelectedKondisi] = useState("");

    return(
        <SafeAreaView >
            <ScrollView>
                <View style={styles.base}>

                    {/* PIHAK 1 */}
                    <Text style={styles.headline}>Form Laporan Kerusakan/Kehilangan Aset</Text>
                    <View style={styles.form}>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jenis Aset</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>STA/Kilometer</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jalur</Text>
                            <Picker
                                selectedJalur={selectedJalur}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedJalur(itemValue)}
                            >
                                <Picker.Item label="A" value="A" />
                                <Picker.Item label="B" value="B" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kondisi Aset</Text>
                            <Picker
                                selectedKondisi={selectedKondisi}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedKondisi(itemValue)}
                            >
                                <Picker.Item label="Rusak Ringan" value="Rusak Ringan" />
                                <Picker.Item label="Rusak Berat" value="Rusak Berat" />
                                <Picker.Item label="Hilang" value="Hilang" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Rincian</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                    </View>
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

                {/* CAMERA */}
                {/* <View style={styles.ImageSections}>
                    <View>
                        {renderFileData()}
                        <Text  style={{textAlign:'center'}}>Base 64 String</Text>
                    </View>
                    <View>
                        {renderFileUri()}
                        <Text style={{textAlign:'center'}}>File Uri</Text>
                    </View>
                </View>

                <View style={styles.btnParentSection}>
                    <TouchableOpacity onPress={chooseImage()} style={styles.btnSection}  >
                        <Text style={styles.btnText}>Choose File</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={launchCamera()} style={styles.btnSection}  >
                        <Text style={styles.btnText}>Directly Launch Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={launchImageLibrary()} style={styles.btnSection}  >
                        <Text style={styles.btnText}>Directly Launch Image Library</Text>
                    </TouchableOpacity>
                </View> */}
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
        fontSize: 18,
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
        width: '40%',
        fontWeight: 'bold'
    },

    form_input: {
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text_input: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical:2
    },

    picker: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        height: 20
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

    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center'
    },
    images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
    },
    btnParentSection: {
        alignItems: 'center',
        marginTop:10
    },
    btnSection: {
        width: 225,
        height: 50,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom:10
    },
    btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight:'bold'
    }
});